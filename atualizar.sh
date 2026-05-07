#!/bin/bash
# Script para garantir que GitHub e producao online usem a mesma base mais atual.

set -euo pipefail

ROOT_DIR="/workspaces/codespaces-blank"
cd "$ROOT_DIR"

FILES=("index.html" "app.js" "styles.css")
ONLINE_URL="https://veiculosnapraianao.web.app"
TMP_DIR=$(mktemp -d)
REMOTE_URL=$(git config --get remote.origin.url)

cleanup() {
	rm -rf "$TMP_DIR"
}
trap cleanup EXIT

echo "🔄 Sincronizando GitHub e producao com a base mais atual..."

echo "📥 Atualizando referencias do GitHub..."
env -u GITHUB_TOKEN git fetch origin --prune

mkdir -p "$TMP_DIR/github" "$TMP_DIR/online"

for file in "${FILES[@]}"; do
	git show "origin/main:public/$file" > "$TMP_DIR/github/$file"
	curl -fsS -o "$TMP_DIR/online/$file" "$ONLINE_URL/$file"
done

REMOTE_MISMATCH=0
for file in "${FILES[@]}"; do
	GITHUB_HASH=$(sha256sum "$TMP_DIR/github/$file" | awk '{print $1}')
	ONLINE_HASH=$(sha256sum "$TMP_DIR/online/$file" | awk '{print $1}')
	if [ "$GITHUB_HASH" != "$ONLINE_HASH" ]; then
		REMOTE_MISMATCH=1
		echo "Divergencia remota detectada: public/$file"
		echo "  github: $GITHUB_HASH"
		echo "  online: $ONLINE_HASH"
	fi
done

if [ "$REMOTE_MISMATCH" -ne 0 ]; then
	echo "🌐 A producao esta mais atual que o GitHub. Atualizando origin/main..."

	env -u GITHUB_TOKEN git clone --quiet "$REMOTE_URL" "$TMP_DIR/repo"
	cd "$TMP_DIR/repo"
	git checkout main >/dev/null 2>&1
	cp "$TMP_DIR/online/index.html" public/index.html
	cp "$TMP_DIR/online/app.js" public/app.js
	cp "$TMP_DIR/online/styles.css" public/styles.css
	git add public/index.html public/app.js public/styles.css

	if git diff --cached --quiet; then
		echo "ℹ️ Nenhuma mudanca para enviar ao GitHub."
	else
		git commit -m "chore: sincronizar GitHub com versao online"
		env -u GITHUB_TOKEN git push origin main
		echo "✅ GitHub atualizado para refletir a producao online."
	fi

	cd "$ROOT_DIR"
	env -u GITHUB_TOKEN git fetch origin --prune
else
	echo "✅ GitHub e producao ja estao alinhados."
fi

if ! git diff --quiet -- public/index.html public/app.js public/styles.css; then
	echo "⚠️  Workspace com alteracoes locais nos arquivos publicados."
	echo "GitHub e online ja foram auditados; para atualizar este workspace sem perder trabalho, limpe ou salve essas alteracoes e execute novamente."
	exit 0
fi

LOCAL_AHEAD=$(git rev-list --count origin/main..HEAD)
if [ "$LOCAL_AHEAD" -gt 0 ]; then
	echo "⚠️  Workspace possui commits locais nao enviados."
	echo "GitHub e online ja foram auditados; resolva esses commits antes de sincronizar este workspace."
	exit 0
fi

echo "📦 Atualizando este workspace para origin/main..."
env -u GITHUB_TOKEN git pull --ff-only origin main

if [ -x "./verificar_base.sh" ]; then
	echo "🔎 Validando alinhamento final entre GitHub e online..."
	./verificar_base.sh
fi

echo "✅ Sincronizacao concluida."



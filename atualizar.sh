#!/bin/bash
# Script para sincronizar com a versao online do Firebase e com o GitHub.

set -euo pipefail

ROOT_DIR="/workspaces/codespaces-blank"
cd "$ROOT_DIR"

echo "🔄 Sincronizando com as versoes mais recentes..."

echo "📥 Atualizando base do GitHub (origin/main)..."
git fetch origin --prune
git pull --ff-only origin main

echo "🌐 Baixando arquivos atuais da producao..."
curl -fsS -o public/index.html "https://veiculosnapraianao.web.app/index.html"
curl -fsS -o public/app.js "https://veiculosnapraianao.web.app/app.js"
curl -fsS -o public/styles.css "https://veiculosnapraianao.web.app/styles.css"

git add public/index.html public/app.js public/styles.css

if git diff --cached --quiet; then
	echo "ℹ️ Nenhuma mudanca detectada nos arquivos principais."
else
	git commit -m "chore: sincronizar com versao online do Firebase"
	echo "💾 Sincronizacao registrada no Git local."
fi

if [ -x "./verificar_base.sh" ]; then
	echo "🔎 Validando alinhamento final (GitHub + online)..."
	./verificar_base.sh
fi

echo "✅ Sincronizacao concluida."



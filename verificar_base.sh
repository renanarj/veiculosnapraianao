#!/bin/bash
# Verifica se o workspace esta alinhado com a ultima versao do GitHub e da producao online.

set -euo pipefail

ROOT_DIR="/workspaces/codespaces-blank"
cd "$ROOT_DIR"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Erro: diretorio nao eh um repositorio Git."
  exit 1
fi

BRANCH=$(git branch --show-current)
if [ "$BRANCH" != "main" ]; then
  echo "Erro: branch atual eh '$BRANCH'. Use a branch main para sincronizar com producao."
  exit 1
fi

git fetch origin --prune >/dev/null 2>&1

LOCAL_HEAD=$(git rev-parse HEAD)
REMOTE_HEAD=$(git rev-parse origin/main)
BEHIND_COUNT=$(git rev-list --count HEAD..origin/main)

if [ "$BEHIND_COUNT" -gt 0 ]; then
  echo "Erro: sua base local esta atras de origin/main ($BEHIND_COUNT commit(s))."
  echo "Execute: ./atualizar.sh"
  exit 1
fi

echo "GitHub: local e origin/main alinhados em $LOCAL_HEAD"

FILES=("index.html" "app.js" "styles.css")
MISMATCH=0

for file in "${FILES[@]}"; do
  LOCAL_HASH=$(sha256sum "public/$file" | awk '{print $1}')
  ONLINE_HASH=$(curl -fsS "https://veiculosnapraianao.web.app/$file" | sha256sum | awk '{print $1}')
  if [ "$LOCAL_HASH" != "$ONLINE_HASH" ]; then
    MISMATCH=1
    echo "Divergencia: public/$file"
    echo "  local : $LOCAL_HASH"
    echo "  online: $ONLINE_HASH"
  else
    echo "OK: public/$file"
  fi
done

if [ "$MISMATCH" -ne 0 ]; then
  echo "Erro: base local nao corresponde ao online para os arquivos principais."
  echo "Execute: ./atualizar.sh"
  exit 1
fi

echo "Base validada: GitHub e online estao alinhados com o workspace."

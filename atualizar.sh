#!/bin/bash
# Script para baixar a versão mais recente do site online

echo "🔄 Baixando versão online mais recente..."

cd /workspaces/codespaces-blank/public

curl -s -o index.html "https://veiculosnapraianao.web.app/index.html"
curl -s -o app.js "https://veiculosnapraianao.web.app/app.js"
curl -s -o styles.css "https://veiculosnapraianao.web.app/styles.css"

echo "✅ Arquivos atualizados com a versão online!"
echo ""
echo "Arquivos baixados:"
echo "  - index.html"
echo "  - app.js"
echo "  - styles.css"

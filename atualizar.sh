#!/bin/bash
# Script para sincronizar com a versão online do Firebase

echo "🔄 Sincronizando com a versão online..."
echo ""

cd /workspaces/codespaces-blank/public

# Baixar arquivos
curl -s -o index.html "https://veiculosnapraianao.web.app/index.html"
curl -s -o app.js "https://veiculosnapraianao.web.app/app.js"
curl -s -o styles.css "https://veiculosnapraianao.web.app/styles.css"

cd /workspaces/codespaces-blank

# Fazer commit automático
git add public/
git commit -m "chore: sincronizar com versão online do Firebase" --allow-empty

echo "✅ Sincronização concluída!"
echo ""
echo "Versão online baixada em:"
echo "  📁 public/index.html"
echo "  📁 public/app.js"
echo "  📁 public/styles.css"
echo ""
echo "💾 Alterações salvas no Git"


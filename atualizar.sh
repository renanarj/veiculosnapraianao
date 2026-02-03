#!/bin/bash
# Script para sincronizar com a versão online do Firebase e GitHub

echo "🔄 Sincronizando com versões online..."
echo ""

cd /workspaces/codespaces-blank

# Tentar fazer pull do GitHub primeiro
echo "📥 Puxando atualizações do GitHub..."
git pull origin main --quiet 2>/dev/null || true

echo ""
echo "🌐 Baixando versão do Firebase..."
cd public

# Baixar arquivos mais recentes
curl -s -o index.html "https://veiculosnapraianao.web.app/index.html"
curl -s -o app.js "https://veiculosnapraianao.web.app/app.js"
curl -s -o styles.css "https://veiculosnapraianao.web.app/styles.css"

cd /workspaces/codespaces-blank

# Fazer commit das sincronizações
git add public/ -q 2>/dev/null || true
git commit -m "chore: sincronizar com versão online do Firebase" --allow-empty --quiet

echo ""
echo "✅ Sincronização concluída!"
echo ""
echo "Versão online baixada em:"
echo "  📁 public/index.html"
echo "  📁 public/app.js"
echo "  📁 public/styles.css"
echo ""
echo "💾 Alterações salvas no Git local"



#!/bin/bash
# Script para publicar alterações locais no Firebase Hosting

echo "📝 Analisando mudanças..."
echo ""

cd /workspaces/codespaces-blank

# Mostrar mudanças
echo "📋 Arquivos modificados:"
git status --short public/ || echo "  Nenhuma alteração"

echo ""
echo "🚀 Publicando no Firebase Hosting..."
echo ""

firebase deploy --only hosting

echo ""
echo "✅ Site atualizado!"
echo "🌐 Acesse: https://veiculosnapraianao.web.app/"
echo ""

# Salvar alterações no Git
git add public/ deploy.log .firebase/
git commit -m "chore: publicado no Firebase Hosting" --allow-empty

echo "💾 Alterações salvas no Git local"


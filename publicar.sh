#!/bin/bash
# Script para publicar alterações no Firebase Hosting E fazer push no GitHub

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
echo "✅ Site atualizado no Firebase!"
echo "🌐 Acesse: https://veiculosnapraianao.web.app/"
echo ""

# Salvar alterações no Git
echo "💾 Enviando para GitHub..."
git add public/ deploy.log .firebase/ 2>/dev/null || true
git commit -m "chore: publicado no Firebase Hosting" --allow-empty --quiet

# Fazer push no GitHub
if git push origin main 2>/dev/null; then
    echo "✅ GitHub atualizado!"
    echo "📦 Repositório: https://github.com/renanarj/veiculosnapraianao"
else
    echo "⚠️  Erro ao enviar para GitHub. Verifique sua conexão."
fi

echo ""
echo "🎉 Tudo sincronizado!"



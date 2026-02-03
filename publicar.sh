#!/bin/bash
# Script para publicar alterações no Firebase Hosting

echo "🚀 Publicando alterações..."

cd /workspaces/codespaces-blank
firebase deploy --only hosting

echo ""
echo "✅ Site atualizado em: https://veiculosnapraianao.web.app/"

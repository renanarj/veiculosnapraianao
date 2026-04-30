#!/bin/bash
# Script para publicar alterações no Firebase Hosting E fazer push no GitHub

set -e

echo "📝 Analisando mudanças..."
echo ""

cd /workspaces/codespaces-blank

echo "🔎 Verificando se a base local esta atualizada com o GitHub..."
git fetch origin --prune >/dev/null 2>&1
BEHIND_COUNT=$(git rev-list --count HEAD..origin/main)
if [ "$BEHIND_COUNT" -gt 0 ]; then
    echo "⚠️  Sua base local esta atras de origin/main ($BEHIND_COUNT commit(s))."
    echo "Execute ./atualizar.sh antes de publicar."
    exit 1
fi

# Incrementar versão automaticamente (formato X.Y)
if [ ! -f VERSION ]; then
    echo "1.0" > VERSION
fi

VERSAO_ATUAL=$(tr -d '[:space:]' < VERSION)
MAJOR=${VERSAO_ATUAL%%.*}
MINOR=${VERSAO_ATUAL#*.}

if ! [[ "$MAJOR" =~ ^[0-9]+$ ]] || ! [[ "$MINOR" =~ ^[0-9]+$ ]]; then
    echo "⚠️  VERSION inválido: $VERSAO_ATUAL"
    echo "Use o formato X.Y (ex.: 1.0)"
    exit 1
fi

NOVA_VERSAO="$MAJOR.$((MINOR + 1))"
echo "$NOVA_VERSAO" > VERSION

echo "🏷️  Versão atualizada: $VERSAO_ATUAL -> $NOVA_VERSAO"
echo ""

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

echo "🔎 Validando deploy (hash local x online)..."
for f in index.html app.js styles.css; do
    HASH_LOCAL=$(sha256sum "public/$f" | awk '{print $1}')
    HASH_ONLINE=$(curl -fsS "https://veiculosnapraianao.web.app/$f" | sha256sum | awk '{print $1}')
    if [ "$HASH_LOCAL" != "$HASH_ONLINE" ]; then
        echo "❌ Divergencia detectada em public/$f apos deploy"
        echo "   local : $HASH_LOCAL"
        echo "   online: $HASH_ONLINE"
        exit 1
    fi
done
echo "✅ Deploy validado: online igual ao local."


# Salvar alterações no Git
echo "💾 Enviando para GitHub..."
git add public/ VERSION deploy.log .firebase/ 2>/dev/null || true
git commit -m "chore: publicado no Firebase Hosting v$NOVA_VERSAO" --allow-empty --quiet

# Criar tag da versão para rastrear histórico facilmente
TAG="v$NOVA_VERSAO"
if git rev-parse "$TAG" >/dev/null 2>&1; then
    echo "⚠️  Tag $TAG já existe localmente. Pulando criação da tag."
else
    git tag -a "$TAG" -m "Versão $NOVA_VERSAO"
fi

# Fazer push no GitHub
if git push origin main 2>/dev/null && git push origin --tags 2>/dev/null; then
    echo "✅ GitHub atualizado!"
    echo "🏷️  Tag enviada: $TAG"
    echo "📦 Repositório: https://github.com/renanarj/veiculosnapraianao"
else
    echo "⚠️  Erro ao enviar para GitHub. Verifique sua conexão."
fi

echo ""
echo "🎉 Tudo sincronizado!"



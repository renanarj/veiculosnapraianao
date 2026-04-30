#!/bin/bash
# Script para sincronizar tudo: atualizar do online, editar, e publicar

echo "🔄 Sincronizando com versão online..."
./atualizar.sh

echo ""
echo "🔎 Verificando alinhamento com GitHub e online..."
./verificar_base.sh

echo ""
echo "✏️  Faça suas edições nos arquivos e depois execute:"
echo "   ./publicar.sh"
echo ""
echo "Ou execute este script novamente para sincronizar automaticamente"

# 🔐 Como Configurar Push para GitHub

O seu repositório está mostrando erro 403 (permissão negada). Aqui estão as soluções:

## Solução 1️⃣: Criar um Personal Access Token (Recomendado)

1. **Acesse:** https://github.com/settings/tokens/new

2. **Configure o token:**
   - Nome: `codespaces-veiculosnapraianao`
   - Escopo: marque ✅ `repo` (acesso completo ao repositório)
   - Clique em "Generate token"

3. **Copie o token** (começa com `ghp_` ou `github_pat_`)

4. **Cole no terminal abaixo:**
```bash
# Substitua SEU_TOKEN pelo token que você copiou
cd /workspaces/codespaces-blank
git remote set-url origin https://renanarj:SEU_TOKEN@github.com/renanarj/veiculosnapraianao.git
git push origin main
```

---

## Solução 2️⃣: Usar GitHub CLI

```bash
gh auth login --web
```

E siga as instruções para autenticar novamente com permissões completas.

---

## Solução 3️⃣: Verificar Permissões

Se você não é o proprietário do repositório:
1. Peça ao proprietário para adicionar você como colaborador
2. Acesse: https://github.com/renanarj/veiculosnapraianao/settings/access
3. Verifique se sua conta tem permissão

---

## ✅ Depois de Configurar

Teste o push com:
```bash
git push origin main
```

---

## 📝 Seus commits estão prontos para enviar:

```
✓ c226cfa - docs: adicionar README e melhorar scripts
✓ 3f20aed - feat: adicionar modal de confirmação com senha
```

Escolha uma das soluções acima e me avise quando conseguir! 🚀

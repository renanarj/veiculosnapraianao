# 🚀 Veículos na Praia Não - Guia de Uso

## Scripts de Sincronização

### 1. **Sincronizar com versão online** (sempre fazer primeiro)
```bash
./atualizar.sh
```
- Baixa a versão mais recente do site online
- Atualiza os arquivos locais
- Salva no Git

### 2. **Fazer suas alterações**
- Edite os arquivos em `public/`:
  - `index.html` - Estrutura HTML
  - `app.js` - Lógica JavaScript
  - `styles.css` - Estilos CSS

### 3. **Publicar alterações** (após editar)
```bash
./publicar.sh
```
- Mostra o que foi alterado
- Publica no Firebase Hosting
- Salva alterações no Git

---

## 📋 Fluxo Recomendado

**Quando abrir o Codespace pela primeira vez:**
```bash
./atualizar.sh
```

**Durante o dia (editar e publicar):**
1. Edite os arquivos conforme necessário
2. Execute `./publicar.sh` para publicar
3. Acesse https://veiculosnapraianao.web.app/ para testar

**Se quiser sincronizar novamente:**
```bash
./atualizar.sh
```

---

## 🔗 Links Úteis

- **Site Online:** https://veiculosnapraianao.web.app/
- **Firebase Console:** https://console.firebase.google.com/project/veiculosnapraianao
- **GitHub:** https://github.com/renanarj/veiculosnapraianao

---

## 💾 Estrutura de Arquivos

```
/workspaces/codespaces-blank/
├── public/
│   ├── index.html        # Interface HTML
│   ├── app.js            # Lógica da aplicação
│   ├── styles.css        # Estilos
│   ├── logo vpn.png      # Logo
│   ├── icmbio horizontal@1000x-8.png
│   └── Brasão da república quadrado.png
├── firebase.json         # Configuração Firebase
├── atualizar.sh          # Script de sincronização
├── publicar.sh           # Script de deployment
└── README.md             # Este arquivo
```

---

## 🆘 Suporte

Se tiver problemas:
1. Verifique se está logado no Firebase: `firebase login`
2. Teste os scripts individualmente
3. Verifique o status do Git: `git status`

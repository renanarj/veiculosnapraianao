# 🚀 Veículos na Praia Não - Guia de Uso

## Scripts de Sincronização

### 1. **Sincronizar com versão online** (sempre fazer primeiro)
```bash
./atualizar.sh
```
- Baixa a versão mais recente do site online
- Atualiza os arquivos locais
- Salva no Git

### 1.1 **Validar base antes de editar**
```bash
./verificar_base.sh
```
- Confere se `HEAD` local está alinhado com `origin/main`
- Confere hash local x online para:
  - `public/index.html`
  - `public/app.js`
  - `public/styles.css`
- Se falhar, execute `./atualizar.sh`

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
- Incrementa automaticamente a versão (`VERSION`): `1.0`, `1.1`, `1.2`...
- Bloqueia publicação se a base local estiver atrás do GitHub
- Publica no Firebase Hosting
- Valida hash local x online após o deploy
- Salva alterações no Git
- Cria tag da versão no GitHub (`v1.1`, `v1.2`, `v1.3`...)

---

## 📋 Fluxo Recomendado

**Quando abrir o Codespace pela primeira vez:**
```bash
./atualizar.sh
./verificar_base.sh
```

**Durante o dia (editar e publicar):**
1. Execute `./verificar_base.sh` para confirmar base atual
2. Edite os arquivos conforme necessário
3. Execute `./publicar.sh` para publicar
4. Acesse https://veiculosnapraianao.web.app/ para testar

**A cada publicação:**
- O arquivo `VERSION` é atualizado automaticamente
- Um commit com a versão é criado
- Uma tag numérica (ex.: `v1.2`, `v1.3`, `v1.4`) é enviada para o GitHub

**Ao pedir uma atualização para o Copilot:**
- Informe sempre a versão base com número real, por exemplo: `basear na versão v1.2`
- Nunca use placeholder (`vX.Y`) no pedido

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
├── VERSION               # Versão atual da aplicação
├── atualizar.sh          # Script de sincronização
├── verificar_base.sh     # Checagem de base local x GitHub x online
├── publicar.sh           # Script de deployment
└── README.md             # Este arquivo
```

---

## 🆘 Suporte

Se tiver problemas:
1. Verifique se está logado no Firebase: `firebase login`
2. Teste os scripts individualmente
3. Verifique o status do Git: `git status`

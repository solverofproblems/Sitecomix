# Sitecomix

Site de quadrinhos com integração de IA usando Google Gemini.

## Estrutura do Projeto

- `backend/` - API Node.js com Express (serve também o frontend)
- `frontend/` - Interface web estática

## Deploy no Render

### Configuração

1. **Variáveis de Ambiente**: Configure no painel do Render:
   - `GOOGLE_API_KEY`: Sua chave da API do Google Gemini

2. **Build Settings**:
   - Build Command: `npm run build`
   - Start Command: `npm start`

### Endpoints da API

- `GET /` - Página principal do site
- `GET /api/test` - Teste de conectividade da API
- `GET /api/usuario?pergunta=texto` - Gera resposta usando IA

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar servidor
npm start
```

O servidor rodará na porta 3000 (ou na porta definida pela variável PORT). 
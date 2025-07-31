# Sitecomix

Site de quadrinhos com integração de IA usando Google Gemini.

## Estrutura do Projeto

- `backend/` - API Node.js com Express
- `frontend/` - Interface web estática

## Deploy no Render

### Configuração

1. **Variáveis de Ambiente**: Configure no painel do Render:
   - `GOOGLE_API_KEY`: Sua chave da API do Google Gemini

2. **Build Settings**:
   - Build Command: `npm install`
   - Start Command: `npm start`

### Endpoints da API

- `GET /` - Teste de conectividade
- `GET /usuario?pergunta=texto` - Gera resposta usando IA

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar servidor
npm start
```

O servidor rodará na porta 3000 (ou na porta definida pela variável PORT). 
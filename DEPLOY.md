# Instruções para Deploy no Render

## Configuração no Render

1. **Conecte seu repositório GitHub** ao Render
2. **Crie um novo Web Service**
3. **Configure as seguintes configurações**:

### Build Settings
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

### Environment Variables
Adicione a seguinte variável de ambiente:
- **Key**: `GOOGLE_API_KEY`
- **Value**: Sua chave da API do Google Gemini

## Estrutura do Projeto

O projeto está configurado com:
- `package.json` na raiz com dependências e scripts
- `backend/script.js` como servidor principal
- Configuração automática da porta via variável `PORT`

## Teste da API

Após o deploy, você pode testar:
- `GET /` - Teste de conectividade
- `GET /usuario?pergunta=sua_pergunta` - Gera resposta usando IA

## Troubleshooting

Se o deploy falhar:
1. Verifique se a `GOOGLE_API_KEY` está configurada
2. Confirme que o repositório está sincronizado
3. Verifique os logs do Render para erros específicos 
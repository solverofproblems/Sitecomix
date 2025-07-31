# Teste de Deploy

## Configuração Atual

### Package.json da raiz:
- Todas as dependências estão na raiz
- Script de build: `npm install`
- Script de start: `node backend/script.js`

### Estrutura do projeto:
```
Sitecomix/
├── package.json (com todas as dependências)
├── backend/script.js (servidor)
└── frontend/ (arquivos estáticos)
```

## Configuração no Render

### Build Settings:
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

### Environment Variables:
- `GOOGLE_API_KEY`: Sua chave da API do Google Gemini

## Troubleshooting

Se o erro persistir:
1. Verifique se o arquivo `backend/script.js` existe no repositório
2. Confirme que não há problemas de permissão
3. Verifique os logs completos do Render 
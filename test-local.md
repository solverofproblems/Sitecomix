# Teste Local

## Como testar localmente

1. **Instale as dependências**:
   ```bash
   npm install
   ```

2. **Configure a variável de ambiente**:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione: `GOOGLE_API_KEY=sua_chave_aqui`

3. **Inicie o servidor**:
   ```bash
   npm start
   ```

4. **Acesse no navegador**:
   - `http://localhost:3000` - Página principal
   - `http://localhost:3000/api/test` - Teste da API

## Estrutura de URLs

- `/` - Página principal (index.html)
- `/ajuda.html` - Página de ajuda
- `/sobre.html` - Página sobre
- `/api/test` - Teste da API
- `/api/usuario?pergunta=texto` - API da IA

## Arquivos servidos automaticamente

- HTML, CSS, JS e imagens da pasta `frontend/`
- Todas as rotas da API com prefixo `/api/` 
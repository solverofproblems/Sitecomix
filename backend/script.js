import express from 'express';
import cors from 'cors'
import {GoogleGenAI} from "@google/genai";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ai = new GoogleGenAI({});
const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota principal - serve o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Rota de teste da API
app.get('/api/test', (req, res) => {
    res.json({ message: 'API do Sitecomix funcionando!' });
});




app.get('/api/usuario', async (req, res) => {
    try {
        const pergunta = req.query.pergunta;
        
        if (!pergunta) {
            return res.status(400).json({ error: 'Pergunta é obrigatória' });
        }
        
        const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const result = await model.generateContent(pergunta);
        const resposta = result.response.text();
        
        res.json({ resposta });
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
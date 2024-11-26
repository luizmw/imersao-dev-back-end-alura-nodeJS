import { GoogleGenerativeAI } from "@google/generative-ai";

// const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function gerarDescricaoComGemini(imageBuffer) {
    const prompt = "Gere uma descrição em português do brasil em poucas linhas para a imagem a seguir. Seja direto e objetivo. ";
    try {
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png"
            },
        };
        const result = await model.generateContent([prompt, image]);
        return result.response.text() || "Alt-text não disponível";
    } catch (error) {
        console.error("Erro ao obter alt-text: ", error.message, erro);
        throw new Error("Erro ao obter o alt-text do Gemini");
    }

}

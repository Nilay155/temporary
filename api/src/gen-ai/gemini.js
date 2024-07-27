import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function gemini() {
    const model = genAI.getGenerativeModel({ model: "gemini-flash-1.5" });

    const prompt = ""

    const result = await model.generateContent([prompt]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

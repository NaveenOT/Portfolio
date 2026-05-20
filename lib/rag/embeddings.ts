import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
export  async function getEmbeddings(text: string) {
    const embeddings = new HuggingFaceInferenceEmbeddings({
        apiKey: process.env.HUGGINGFACEHUB_API_KEY,
        model: "sentence-transformers/all-MiniLM-L6-v2",
    });
    return await embeddings.embedQuery(text);
}
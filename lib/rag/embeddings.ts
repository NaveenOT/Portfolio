import {pipeline} from "@xenova/transformers";
//understand code
export  async function getEmbeddings(text: string) {
    const embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
    const embeddings = await embedder(text, {
        pooling: "mean",
        normalize: true,
    });
    return Array.from(embeddings.data);
}
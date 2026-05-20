import {getEmbeddings} from "@/lib/rag/embeddings";
import {supabase} from "@/lib/rag/supabase";

export async function retrieveRelevantDocuments(query: string, topK: number = 5) {
    const queryEmbedding = await getEmbeddings(query);
    const { data, error } = await supabase.rpc("match_documents", {
        query_embedding: queryEmbedding,
        match_count: topK,
    });
    if(error) {
        console.error("Error retrieving documents:", error);
        return [];
    }
    return data;
    
}
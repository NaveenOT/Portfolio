import fs from "fs";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import {supabase} from "./supabase";
import "dotenv/config";
import {getEmbeddings} from "./embeddings";
async function processAndStoreDocument(text: string, source: string) {
    const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 1000,
            chunkOverlap: 200,
        }); 
        const chunks = await splitter.createDocuments([text]);
        for (const chunk of chunks) {
            const embeddings = await getEmbeddings(chunk.pageContent);            
            await supabase.from("documents").insert({
                content: chunk.pageContent,
                source: source,
                embedding: embeddings,
            });
            console.log("Inserted chunk with source:" + source);
        }
}

async function ingestPDF(pdfPath: string) {
    try{
        const loader = new PDFLoader(pdfPath);
        const documents = await loader.load();
        const text = documents.map(doc => doc.pageContent).join("\n");
        await processAndStoreDocument(text, pdfPath);
    }catch (error) {
        console.error("Error ingesting PDF:", error);
    }
}
async function ingestMD(mdPath: string) {
    try{
        const documents = fs.readFileSync(mdPath, "utf-8");
        await processAndStoreDocument(documents, mdPath);
    }catch (error) {
        console.error("Error ingesting MD:", error);
    }
}
async function main() {
    await ingestPDF("D:\\projects\\portfolio\\port\\public\\resume.pdf");
    await ingestMD("D:\\projects\\portfolio\\port\\public\\content\\astrotype.md");
    await ingestMD("D:\\projects\\portfolio\\port\\public\\content\\clouddrop.md");
    await ingestMD("D:\\projects\\portfolio\\port\\public\\content\\billing.md");
    await ingestMD("D:\\projects\\portfolio\\port\\public\\content\\aismartcheckoutsystem.md");
    await ingestMD("D:\\projects\\portfolio\\port\\public\\content\\hobbies.md");
    console.log("Ingestion completed");
}

main();
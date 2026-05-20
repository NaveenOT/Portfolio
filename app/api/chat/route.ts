import { streamText, convertToModelMessages } from "ai";  // import the converter
import { groq } from "@ai-sdk/groq";
import { retrieveRelevantDocuments } from "@/lib/rag/retrieve";
import { format } from "path";
export async function POST(req: Request) {
  const body = await req.json();
  const messages = body.messages;
  const lastMsg = messages[messages.length - 1];
  const latestMessage =
    lastMsg.parts?.find((p: unknown) => (p as { type: string }).type === "text")?.text ??
    lastMsg.content ??
    "";
  const docs = await retrieveRelevantDocuments(latestMessage, 5); 
  const context = docs.map((d: unknown) => (d as { content: string }).content).join("\n");

  console.log("Retrieved documents:", docs);
  const formattedContext = docs
  .map((doc: unknown) => (doc as { content: string }).content)
  .join("\n\n---\n\n");
  const prompt = `
    You are an AI assistant for Naveen O.T’s portfolio website.

    Answer questions only related to the following topics based on the provided context:
    - Resume
    - Projects
    - Skills
    - Experience
    - Open source contributions
    - Education
    - Hobbies

    Context:
    ${context}

    Question:
    ${latestMessage}

    Guidelines:
    - Keep responses clear, concise, and professional.
    - You can use emjois to make the response more engaging, but do not overuse them.
    - use markdown formatting to create make the response more readable and engaging.
    - Answer only from the retrieved context.
    - If the information is not available, say:
    “I couldn’t find that information in Naveen’s portfolio data.”
    - Do not make up information or hallucinate details.
    - When discussing projects, mention:
    - purpose
    - technologies used
    - key features or challenges
    - Use bullet points when appropriate.
    - Combine information from multiple documents if relevant.
    - Keep the tone friendly, technical, and professional.
    - Stay focused on portfolio-related questions only.

    If the user asks for an introduction or summary, provide a short professional overview of Naveen based on the available context.
    `
console.log("Constructed prompt:", prompt);
  const result = streamText({
    model: groq("openai/gpt-oss-20b"),
    system: prompt,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
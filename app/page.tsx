"use client";
import "ai"
import { useChat } from "@ai-sdk/react";
import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeCard } from "@/app/ResumeCard";
import { ProjectCard } from "@/app/ProjectCard";
import { ContactCard } from "@/app/ContactCard";
import { useState, useEffect, useRef } from "react";
import { Spinner } from "@/components/ui/spinner";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DefaultChatTransport } from "ai";

export default function Home() {
  const { messages, status, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    })
  });

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage({ text: input });
      setInput("");
    }
  }
  return (
    <>
<nav className="fixed top-0 left-0 w-full border-b bg-background shadow-md z-50 p-4 flex items-center justify-center hover:bg-gray-200 transition duration-300">
      <h1 className="text-2xl font-semibold">Naveen's Portfolio 📝</h1>
    </nav>
    <div className="flex h-screen flex-col bg-background pt-20">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={message.role === "user" ? "ml-auto rounded-xl bg-primary text-primary-foreground p-4 w-fit max-w-[70%]" : "rounded-xl bg-muted p-4 w-fit max-w-[70%]"}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
              {message.parts.map(part => { return part.type === "text" ? part.text : null }).filter(Boolean).join("\n")}
            </ReactMarkdown>
          </div>
        ))}
        {status === 'streaming' && (
          <div className="rounded-xl bg-muted p-4 w-fit max-w-[70%]">
            <Spinner />
          </div>
        )}
      </div>
      <div ref={messagesEndRef} />
      <Drawer>
        <DrawerTrigger
          className="
    inline-flex items-center gap-2
    rounded-2xl
    justify-center
  text-black
    px-6 py-3
    text-xl font-semibold
    shadow-lg
    transition-all duration-300
    scale-95
    hover:scale-100
    active:scale-95
  "
        >
          Click Here
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-xl">Quick Access</DrawerTitle>
          </DrawerHeader>
          <div className="flex justify-center w-full px-8">
            <ResumeCard heading="Resume" description="Take a look at my resume" image="./images/resumeimg.png" />
            <ProjectCard heading="Projects" description="Check out my latest projects" image="./images/projectsimg.png" />
            <ContactCard heading="Contact" description="Get in touch with me" image="./images/contactimg.png" />
          </div>
          <DrawerFooter>
            <DrawerClose>
              <Button className="text-lg p-4 m-3">Close</Button>
            </DrawerClose>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
      <div className="p-4 pb-10">
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-background px-4 pt-3 pb-2 shadow-md">
          <Textarea placeholder="Ask anything about Naveen" className="min-h-[60px] !text-xl resize-none border-none shadow-none focus:visible:ring-0 p-2" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
          <div className="flex justify-end">
            <Button size="icon" className="rounded-full h-12 w-12" onClick={() => { sendMessage({ text: input }); setInput("") }} disabled={status === 'streaming' || input.trim() === "" || status === 'submitted'}>
              <ArrowUpIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

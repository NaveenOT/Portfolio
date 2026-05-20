"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SidebarGroupContent, SidebarGroupLabel, useSidebar, SidebarMenu,SidebarMenuButton ,SidebarMenuAction, SidebarMenuItem, SidebarInset } from "@/components/ui/sidebar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, GitBranch,Folder } from "lucide-react"
import { useState, useEffect, use } from "react";
import { SidebarProvider, SidebarTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "@/components/ui/sidebar";


type CardImageProps = {
  heading: string;
  description: string;
  image: string;
}

export function ProjectCard({ heading, description, image }: CardImageProps) {
  const [active, setActive] = useState("Astrotype");
  return (
    <Dialog>
      <Card className="relative mx-auto w-sm max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src={image}
          alt={heading}
          className="relative z-20 aspect-video w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="text-2xl">{heading}</CardTitle>
          <CardDescription className="text-lg">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <DialogTrigger asChild>
            <Button className="w-full mb-2 p-4 text-lg">View</Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <DialogContent className="!max-w-[90rem] h-[95vh]">

        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <SidebarProvider>
          <AppSidebar active={active} setActive={setActive}/>
          <SidebarInset>
            <ProjectDetails name={active}/>
          </SidebarInset>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  )
}

function AppSidebar({ active, setActive }: { active: string; setActive: (name: string) => void }) {
  const projects = [
    "Astrotype",
    "Clouddrop",
    "Billing",
    "AI Smart Checkout System",
  ]

  const contributions = [
    "Meshery",
    "Kubestellar",
  ]
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>

        <SidebarHeader className="border-b py-4">
          <h2 className="text-3xl font-bold">Works</h2>
        </SidebarHeader>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center ">
              <span className="text-lg">Projects</span>                
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {projects.map((project) => (
                    <SidebarMenuItem key={project}>
                      <SidebarMenuButton
                        onClick={() => setActive(project)}
                        isActive={active === project}
                      >
                        <Folder className="size-4" />
                        <span className="text-base">{project}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center">
                <span className="text-lg overflow-hidden text-ellipsis whitespace-nowrap">Open Source Contributions</span>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {contributions.map((item) => (
                    <SidebarMenuItem key={item}>
                      <SidebarMenuButton
                        onClick={() => setActive(item)}
                        isActive={active === item} >
                        <GitBranch className="size-4" />
                        <span className="text-base">{item}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}

function ProjectDetails({name}: { name: string }) {
  const [content, setContent] = useState("");
  useEffect(() => {
    const names = name.toLowerCase().split(" ").join("");
    fetch(`content/${names}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [name]);
  return(
    <div className="h-full overflow-y-auto px-8 py-6 text-lg prose prose-invert max-w-none prose-lg">
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  )
}
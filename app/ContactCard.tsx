import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
import { Mail, } from "lucide-react"
import {IconBrandLinkedin, IconBrandGithub} from "@tabler/icons-react";

type CardImageProps = {
  heading: string;
  description: string;
  image: string;
}

export function ContactCard({ heading, description, image }: CardImageProps) {
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
    <DialogContent className="!max-w-[30rem] h-[45vh]">
  <DialogHeader>
    <DialogTitle className="text-2xl">{heading}</DialogTitle>
    <DialogDescription className="text-lg">
      {description}
    </DialogDescription>
  </DialogHeader>
  <div className="flex flex-col gap-3 mt-1 overflow-auto">
    <a
        href="mailto:naveen@example.com"
        className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted transition-colors"
      >
        <Mail className="h-6 w-6 text-muted-foreground" />
        <div>
          <p className="text-lg font-medium">Email</p>
          <p className="text-lg text-muted-foreground">naveen.ottilingam@gmail.com</p>
        </div>
      </a>

      <a
        href="https://linkedin.com/in/naveenot"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted transition-colors"
      >
      <IconBrandLinkedin className="h-6 w-6 text-muted-foreground" />
        <div>
          <p className="text-lg font-medium">LinkedIn</p>
          <p className="text-lg text-muted-foreground">linkedin.com/in/naveenot</p>
        </div>  
      </a>

      <a
        href="https://github.com/NaveenOT"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted transition-colors"
      >
      <IconBrandGithub className="h-6 w-6 text-muted-foreground" />
        <div>
          <p className="text-lg font-medium">GitHub</p>
          <p className="text-lg  text-muted-foreground">github.com/NaveenOT</p>
        </div>
      </a>
    </div>
</DialogContent>
    </Dialog>
  )
}

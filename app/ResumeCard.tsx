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

type CardImageProps = {
  heading: string;
  description: string;
  image: string;
}

export function ResumeCard({ heading, description, image }: CardImageProps) {
  return (
    <Dialog>
    <Card className="relative mx-auto w-sm max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image}
        alt={heading}
        className="relative z-20 aspect-video w-full object-cover brightness-100 "
      />
      <CardHeader>
        <CardTitle className="text-2xl">{heading}</CardTitle>
        <CardDescription className="text-lg">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <DialogTrigger asChild>
        <Button className="w-full p-4 mb-2 text-lg">View</Button>
        </DialogTrigger>
      </CardFooter>
    </Card>
    <DialogContent className="flex flex-col !max-w-[90rem] h-[95vh] p-0 gap-0 overflow-hidden">

  <DialogHeader className="px-6 pt-6 pb-3 shrink-0">
    <DialogTitle className="text-2xl">{heading}</DialogTitle>
    <DialogDescription className="text-lg">
      {description}
    </DialogDescription>
  </DialogHeader>

  <iframe
    src="/resume.pdf#view=FitH"
    className="w-full flex-1 border-0"
  />

</DialogContent>
    </Dialog>
  )
}

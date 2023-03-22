import type { NextPage } from "next";
import {
  HeroButton,
  Input,
  type InputRef,
  AspectRatio,
  FadeIn,
  Textarea,
  Avatar,
  AvatarFallback,
  AvatarImage,
  type TextareaRef,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Modal,
} from "@chia-stack/react-ui";
import { z } from "zod";
import { useRef, useState } from "react";
import useDarkMode from "@/hooks/use-dark-mode";
import Image from "next/image";

const EmailSchema = z.string().email();
const MessageSchema = z.string().min(10);

const HomePage: NextPage = () => {
  const inputRef = useRef<InputRef>(null);
  const textareaRef = useRef<TextareaRef>(null);
  const handleClick = () => {
    if (inputRef.current && textareaRef.current) {
      console.log(
        inputRef.current.isValid(),
        inputRef.current.value,
        textareaRef.current.getValidity(),
        textareaRef.current.getNativeInput().value
      );
    }
  };
  const { toggle } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="container mx-auto flex flex-col gap-5">
      <h1 className="text-4xl">HomePage</h1>
      <Avatar className="h-20 w-20 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1">
        <AvatarImage
          src="https://github.com/chia1104.png"
          alt="chia1104"
          className="ctw-component-bg-secondary rounded-full"
        />
        <AvatarFallback>Chia1104</AvatarFallback>
      </Avatar>
      <Input
        ref={inputRef}
        title="Email"
        type="email"
        titleClassName="text-xl"
        schema={EmailSchema}
        error="Invalid email"
        placeholder="Email"
        className="w-80"
      />
      <Textarea
        ref={textareaRef}
        title="Message"
        titleClassName="text-xl"
        schema={MessageSchema}
        error="At least 10 characters"
        placeholder="Message"
        className="w-80"
      />
      <HeroButton onClick={handleClick}>Log to console</HeroButton>
      <HeroButton onClick={toggle}>Toggle theme</HeroButton>
      <HeroButton onClick={() => setIsOpen(true)}>Open modal</HeroButton>
      <Modal isOpen={isOpen} handleModal={() => setIsOpen(false)}>
        <div>test</div>
      </Modal>
      <div className="inline-flex flex-wrap items-center justify-center gap-2">
        <Button className="w-20">Default</Button>
        <Button className="w-20" variant="outline">
          Outline
        </Button>
        <Button className="w-20" variant="ghost">
          Ghost
        </Button>
        <Button className="w-20" variant="link">
          Link
        </Button>
        <Button className="w-20" variant="success">
          Success
        </Button>
        <Button className="w-20" variant="successOutline">
          Success
        </Button>
        <Button className="w-20" variant="successGhost">
          Success
        </Button>
        <Button className="w-20" variant="successLink">
          Success
        </Button>
        <Button className="w-20" variant="danger">
          Danger
        </Button>
        <Button className="w-20" variant="dangerOutline">
          Danger
        </Button>
        <Button className="w-20" variant="dangerGhost">
          Danger
        </Button>
        <Button className="w-20" variant="dangerLink">
          Danger
        </Button>
        <Button className="w-20" variant="warning">
          Warning
        </Button>
        <Button className="w-20" variant="warningOutline">
          Warning
        </Button>
        <Button className="w-20" variant="warningGhost">
          Warning
        </Button>
        <Button className="w-20" variant="warningLink">
          Warning
        </Button>
        <Button
          className="dark:border-primary border-secondary hover:bg-secondary/20 dark:hover:bg-primary/20 w-20"
          variant="outline">
          Custom
        </Button>
      </div>
      <Accordion type="single" collapsible className="w-[450px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <FadeIn>
        <AspectRatio ratio={16 / 9} className="bg-slate-50 dark:bg-slate-800">
          <Image
            src="https://opengraph-dev.zeabur.app/api/og"
            alt="Zeabur"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </FadeIn>
      <div>
        <HoverCard openDelay={500} closeDelay={300}>
          <HoverCardTrigger>
            <Button variant="link" className="text-xl">
              Hover me
            </Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </main>
  );
};

export default HomePage;

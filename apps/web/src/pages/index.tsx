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
} from "@chia-stack/react-ui";
import { z } from "zod";
import { useRef } from "react";
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
        inputRef.current.getValidity(),
        inputRef.current.getNativeInput().value,
        textareaRef.current.getValidity(),
        textareaRef.current.getNativeInput().value
      );
    }
  };
  const { toggle } = useDarkMode();
  return (
    <main className="container mx-auto flex flex-col gap-5">
      <h1 className="text-4xl text-primary">HomePage</h1>
      <Avatar className="w-20 h-20 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1">
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
      <div className="flex-wrap gap-2 justify-center items-center inline-flex">
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
          className="w-20 dark:border-primary border-secondary hover:bg-secondary/20 dark:hover:bg-primary/20"
          variant="outline">
          Custom
        </Button>
      </div>
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
    </main>
  );
};

export default HomePage;

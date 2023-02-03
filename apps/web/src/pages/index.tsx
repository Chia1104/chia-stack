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

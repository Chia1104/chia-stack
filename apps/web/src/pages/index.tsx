import type { NextPage } from "next";
import { Button, Input, type InputRef } from "@chia-stack/react-ui";
import { z } from "zod";
import { useRef } from "react";
import useDarkMode from "@/hooks/use-dark-mode";

const EmailSchema = z.string().email();

const HomePage: NextPage = () => {
  const inputRef = useRef<InputRef>(null);
  const handleClick = () => {
    if (inputRef.current) {
      console.log(
        inputRef.current.getValidity(),
        inputRef.current.getNativeInput().value
      );
    }
  };
  const { toggle } = useDarkMode();
  return (
    <main className="container mx-auto flex flex-col gap-5">
      <h1 className="text-4xl text-primary bg-ctw_info">HomePage</h1>
      <Input
        ref={inputRef}
        title="Email"
        type="email"
        schema={EmailSchema}
        placeholder="Email"
        className="w-80"
      />
      <Button text="test" onClick={handleClick} className="bg-secondary" />
      <Button text="Toggle theme" onClick={toggle} className="bg-secondary" />
    </main>
  );
};

export default HomePage;

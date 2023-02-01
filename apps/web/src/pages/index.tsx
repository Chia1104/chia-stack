import type { NextPage } from "next";
import { Button, Input, type InputRef } from "@chia-stack/react-ui";
import { z } from "zod";
import { useRef } from "react";

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
  return (
    <main className="container mx-auto flex flex-col gap-10 test">
      <h1 className="text-9xl">HomePage</h1>
      <Input
        ref={inputRef}
        title="Email"
        type="email"
        schema={EmailSchema}
        placeholder="Email"
        className="w-80"
      />
      <Button text="test" onClick={handleClick} />
    </main>
  );
};

export default HomePage;

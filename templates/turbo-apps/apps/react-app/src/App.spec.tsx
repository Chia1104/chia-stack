import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("render: Create with '@chiastack/react-ts-tailwindcss' template", () => {
    render(<App />);
    expect(
      screen.getByText("Create with '@chiastack/react-ts-tailwind' template")
    ).toBeDefined();
  });
});

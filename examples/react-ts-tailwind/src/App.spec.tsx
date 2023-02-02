import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("render: Create with '@chia-stack/react-ts-tailwindcss' template", () => {
    render(<App />);
    expect(
      screen.getByText(
        "Create with '@chia-stack/react-ts-tailwindcss' template"
      )
    ).toBeDefined();
  });
});

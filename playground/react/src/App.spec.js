import { jsx as _jsx } from "react/jsx-runtime";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App", () => {
  test("render: Create with '@chia-stack/react-ts-tailwindcss' template", () => {
    render(_jsx(App, {}));
    expect(
      screen.getByText("Create with '@chia-stack/react-ts-tailwind' template")
    ).toBeDefined();
  });
});

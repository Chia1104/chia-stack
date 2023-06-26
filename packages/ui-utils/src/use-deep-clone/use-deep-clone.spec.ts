import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import useDeepClone from "./use-deep-clone";

describe("useDeepClone", () => {
  it("should return a deep cloned value", () => {
    const { result } = renderHook(() => useDeepClone({ foo: "bar" }));
    expect(result.current[0]).toBe({ foo: "bar" });
  });
});

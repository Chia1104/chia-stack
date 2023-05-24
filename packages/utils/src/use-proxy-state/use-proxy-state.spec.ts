import useProxyState from "./use-proxy-state";
import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";

describe("useProxyState", () => {
  it("should return a proxy", () => {
    const { result } = renderHook(() => useProxyState({ foo: "bar" }));
    expect(result.current.foo).toBe("bar");
  });

  it("should update the proxy", () => {
    const { result } = renderHook(() => useProxyState({ foo: "bar" }));
    result.current.foo = "baz";
    expect(result.current.foo).toBe("baz");
  });
});

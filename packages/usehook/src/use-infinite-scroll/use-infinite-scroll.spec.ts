import { renderHook } from "@testing-library/react";
import useInfiniteScroll, {
  type UseInfiniteScrollOptions,
  type UseInfiniteScrollResult,
} from "./use-infinite-scroll";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type Mock,
} from "vitest";

describe("useInfiniteScroll", () => {
  let onLoadMoreMock: Mock;
  let options: UseInfiniteScrollOptions;

  beforeEach(() => {
    onLoadMoreMock = vi.fn();
    options = {
      hasMore: true,
      isLoading: false,
      onLoadMore: onLoadMoreMock,
      intersectionObserverInit: { rootMargin: "100px" },
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return ref and observer", () => {
    const { result } = renderHook<
      UseInfiniteScrollResult,
      UseInfiniteScrollOptions
    >((options) => useInfiniteScroll(options), {
      initialProps: options,
    });
    expect(result.current.ref).toBeInstanceOf(Function);
    expect(result.current.observer).toBeNull();
  });

  it("should call onLoadMore when node is intersecting", () => {
    // WIP
  });
});

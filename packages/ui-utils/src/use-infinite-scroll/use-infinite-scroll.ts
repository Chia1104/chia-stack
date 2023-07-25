import { useRef, useCallback } from "react";

export interface UseInfiniteScrollOptions {
  hasMore?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  onLoadMore?: () => void;
  onLeave?: () => void;
  intersectionObserverInit?: IntersectionObserverInit;
}

export interface UseInfiniteScrollResult {
  ref: (node: HTMLDivElement) => void;
  observer: IntersectionObserver | null;
}

const useInfiniteScroll = (
  option?: UseInfiniteScrollOptions
): UseInfiniteScrollResult => {
  option ??= {};
  const {
    hasMore,
    isLoading,
    onLoadMore,
    onLeave,
    intersectionObserverInit,
    isError = false,
  } = option;
  const observer = useRef<IntersectionObserver | null>(null);
  const ref = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading || isError || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && hasMore) {
          onLoadMore?.();
          return;
        }
        onLeave?.();
      }, intersectionObserverInit);
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );
  return { ref, observer: observer.current };
};

export default useInfiniteScroll;

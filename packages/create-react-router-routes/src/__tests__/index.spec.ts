import { describe, expect, it } from "vitest";
import readFolderFiles from "../";

describe("readFolderFiles", () => {
  const testFolderPath = "src/__tests__/foo";
  const files = [
    "src/__tests__/foo/bar/page.tsx",
    "src/__tests__/foo/page.tsx",
  ];

  it("should return an array of files", () => {
    expect(readFolderFiles(testFolderPath)).toEqual(files);
  });
});

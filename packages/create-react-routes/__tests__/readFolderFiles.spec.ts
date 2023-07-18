import { readFolderFiles } from "../src/utils";
import { describe, it, expect } from "vitest";

describe("useDeepClone", () => {
  it("should be work", () => {
    const result = readFolderFiles("src");
    console.log(result);
  });
});

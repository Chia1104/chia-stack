import { useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

type CopyToClipboardReturn = [CopiedValue, CopyFn];

export interface CopyToClipboardOptions {
  onCopy?: (copiedText: CopiedValue, result: boolean) => void;
  onFail?: (error: any) => void;
}

const useCopyToClipboard = (
  opts?: CopyToClipboardOptions
): CopyToClipboardReturn => {
  opts ??= {};
  const { onCopy, onFail } = opts;
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      onCopy?.(text, true);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      onFail?.(error);
      return false;
    }
  };

  return [copiedText, copy];
};

export default useCopyToClipboard;

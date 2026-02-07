"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <Button
        size="sm"
        variant="ghost"
        className="absolute right-2 top-2 h-8 px-2"
        onClick={copyToClipboard}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            <span className="ml-1 text-xs">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            <span className="ml-1 text-xs">Copy</span>
          </>
        )}
      </Button>
      <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm">
        <code className="language-{language}">{code}</code>
      </pre>
    </div>
  );
}

"use client";

import { useState } from 'react';

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }
  return (
    <button className="button secondary" onClick={onCopy} disabled={!text} aria-label="Copy to clipboard">
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

"use client";

import { useState } from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { OutputSection } from '../components/OutputSection';
import type { GeneratedContent } from '../lib/generator';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedContent | null>(null);

  return (
    <div className="grid">
      <section className="panel">
        <h1>Luxury Travel Content Agent</h1>
        <p className="subtitle">Create high-converting luxury travel posts for Instagram, TikTok, LinkedIn, and more.</p>
        <GeneratorForm onGenerated={setResult} setLoading={setLoading} />
      </section>

      <section className="panel">
        <h2>Output</h2>
        <OutputSection loading={loading} result={result} />
      </section>
    </div>
  );
}

"use client";

import type { GeneratedContent } from '../lib/generator';
import { CopyButton } from './CopyButton';

export function OutputSection({ loading, result }: { loading: boolean; result: GeneratedContent | null }) {
  if (loading) return <div className="output-card">Generating?</div>;
  if (!result) return <div className="output-card">Your content will appear here.</div>;

  return (
    <div className="stack" style={{ display: 'grid', gap: 12 }}>
      <div className="output-card">
        <div className="output-title">
          <strong>Caption</strong>
          <CopyButton text={result.caption + '\n\n' + result.hashtags.join(' ')} />
        </div>
        <pre className="output-pre">{result.caption}\n\n{result.hashtags.join(' ')}</pre>
      </div>

      <div className="output-card">
        <div className="output-title">
          <strong>Carousel Outline</strong>
          <CopyButton text={result.carouselOutline.join('\n')} />
        </div>
        <pre className="output-pre">{result.carouselOutline.map((f, i) => `${i + 1}. ${f}`).join('\n')}</pre>
      </div>

      <div className="output-card">
        <div className="output-title">
          <strong>Reel Script (20s)</strong>
          <CopyButton text={result.reelScript} />
        </div>
        <pre className="output-pre">{result.reelScript}</pre>
      </div>

      <div className="output-card">
        <div className="output-title">
          <strong>7-Day Itinerary</strong>
          <CopyButton text={result.itinerary.join('\n')} />
        </div>
        <pre className="output-pre">{result.itinerary.map((d) => `? ${d}`).join('\n')}</pre>
      </div>

      <div className="output-card">
        <div className="output-title">
          <strong>Content Calendar</strong>
          <CopyButton text={result.contentCalendar.map(c => `${c.date}: ${c.theme} ? ${c.concept} | ${c.hook}`).join('\n')} />
        </div>
        <pre className="output-pre">{result.contentCalendar.map((c) => `${c.date}: ${c.theme} ? ${c.concept} | ${c.hook}`).join('\n')}</pre>
      </div>

      <p className="footer-note">Tip: Edit hooks and CTAs for platform nuances before posting.</p>
    </div>
  );
}

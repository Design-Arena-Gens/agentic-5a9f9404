"use client";

import { useState } from 'react';
import type { GeneratedContent, Platform } from '../lib/generator';

interface Props {
  onGenerated: (data: GeneratedContent) => void;
  setLoading: (v: boolean) => void;
}

export function GeneratorForm({ onGenerated, setLoading }: Props) {
  const [destination, setDestination] = useState('Amalfi Coast');
  const [audience, setAudience] = useState('honeymooners');
  const [platform, setPlatform] = useState<Platform>('instagram');
  const [tone, setTone] = useState<'opulent' | 'elevated' | 'adventurous' | 'serene' | 'bespoke'>('elevated');
  const [length, setLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [language, setLanguage] = useState('English');
  const [callToAction, setCallToAction] = useState('Inquire now');
  const [brand, setBrand] = useState('Atelier Voyages');
  const [month, setMonth] = useState('Nov');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destination, audience, platform, tone, length, language, callToAction, brand, month })
      });
      const json = await res.json();
      if (json.ok) {
        onGenerated(json.data as GeneratedContent);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="stack" style={{ display: 'grid', gap: 12 }}>
      <div className="row two">
        <div>
          <label>Destination</label>
          <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g., Lake Como" required />
          <div className="helper">Where is the escape?</div>
        </div>
        <div>
          <label>Audience</label>
          <input value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="e.g., modern romantics" required />
          <div className="helper">Who are we speaking to?</div>
        </div>
      </div>

      <div className="row three">
        <div>
          <label>Platform</label>
          <select value={platform} onChange={(e) => setPlatform(e.target.value as Platform)}>
            <option value="instagram">Instagram</option>
            <option value="tiktok">TikTok</option>
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter/X</option>
            <option value="facebook">Facebook</option>
            <option value="pinterest">Pinterest</option>
          </select>
        </div>
        <div>
          <label>Tone</label>
          <select value={tone} onChange={(e) => setTone(e.target.value as any)}>
            <option value="opulent">Opulent</option>
            <option value="elevated">Elevated</option>
            <option value="adventurous">Adventurous</option>
            <option value="serene">Serene</option>
            <option value="bespoke">Bespoke</option>
          </select>
        </div>
        <div>
          <label>Length</label>
          <select value={length} onChange={(e) => setLength(e.target.value as any)}>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
      </div>

      <div className="row two">
        <div>
          <label>Language</label>
          <input value={language} onChange={(e) => setLanguage(e.target.value)} />
        </div>
        <div>
          <label>Month (for calendar)</label>
          <input value={month} onChange={(e) => setMonth(e.target.value)} />
        </div>
      </div>

      <div className="row two">
        <div>
          <label>Call to Action</label>
          <input value={callToAction} onChange={(e) => setCallToAction(e.target.value)} placeholder="Inquire now" />
        </div>
        <div>
          <label>Brand</label>
          <input value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Your agency name" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <button className="button" type="submit">Generate Content</button>
        <span className="badge">No AI key required</span>
      </div>
    </form>
  );
}

import { NextRequest } from 'next/server';
import { generateAll, type GenerateInput } from '../../../lib/generator';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<GenerateInput>;
    const input: GenerateInput = {
      destination: body.destination?.toString() || 'Lake Como',
      audience: body.audience?.toString() || 'modern romantics',
      platform: (body.platform as GenerateInput['platform']) || 'instagram',
      tone: (body.tone as GenerateInput['tone']) || 'elevated',
      length: (body.length as GenerateInput['length']) || 'medium',
      language: body.language?.toString() || 'English',
      callToAction: body.callToAction?.toString() || 'Inquire now',
      brand: body.brand?.toString() || 'Atelier Voyages',
      month: body.month?.toString() || undefined
    };
    const data = generateAll(input);
    return new Response(JSON.stringify({ ok: true, data }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid request' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400
    });
  }
}

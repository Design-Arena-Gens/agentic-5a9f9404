import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Travel Content Agent',
  description: 'Generate luxury travel social media content instantly',
  metadataBase: new URL('https://agentic-5a9f9404.vercel.app'),
  openGraph: {
    title: 'Luxury Travel Content Agent',
    description: 'Generate luxury travel social media content instantly',
    url: 'https://agentic-5a9f9404.vercel.app',
    siteName: 'Luxury Travel Agent',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}

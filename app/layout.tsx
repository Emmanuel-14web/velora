import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const sans = Geist({ variable: '--font-sans', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://velora-v12.chinweduoma.chatgpt.site'),
  title: 'VELORA V12 — Motion, refined.',
  description: 'A fictional ultra-premium electric grand tourer portfolio concept.',
  robots: { index: false, follow: true },
  openGraph: { title: 'VELORA V12 — Motion, refined.', description: 'Silence, speed, and effortless distance.', type: 'website', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'VELORA V12', description: 'Motion, refined.', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}

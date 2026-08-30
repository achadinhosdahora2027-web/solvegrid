import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://solvegrid.com.br'),
  title: {
    default: 'SolveGrid | Ultra Satélite Técnico B2B nos 7 Idiomas de Elite',
    template: '%s | SolveGrid'
  },
  description: 'Diretório técnico B2B SaaS, DevOps e Cloud Infrastructure nos 7 idiomas de elite.',
  other: {
    'msvalidate.01': '3A2C872722FB7A0065EE4481358FF8BE',
    monetag: '8469089b876439517e6c5247573c6e21'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

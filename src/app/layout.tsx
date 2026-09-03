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
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5604700207394147" crossOrigin="anonymous"></script>
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-600 selection:text-white">
        {children}
        <footer id="affiliate-disclosure" style={{clear:"both",margin:"24px auto 8px",maxWidth:720,padding:"10px 14px",fontSize:12,lineHeight:1.5,color:"#94a3b8",background:"rgba(148,163,184,.08)",border:"1px solid rgba(148,163,184,.2)",borderRadius:8}}>
          <strong>Divulgação de Afiliados:</strong> este site participa de programas de afiliados — CJ Affiliate, Amazon Associados, Shopee, Awin e similares. Podemos receber comissão por compras feitas nos links deste site, sem nenhum custo extra para você. <em>(FTC 16 CFR Part 255 / CONAR)</em>
        </footer>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: "var infolinks_pid = 3447442; var infolinks_wsid = 0;" }}></script>
        <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js" async></script>
        <script src="/js/growth-cro-engine.js" defer></script>
      </body>
    </html>
  );
}

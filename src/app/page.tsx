import React from 'react';
import Link from 'next/link';

export default function SolveGridHome() {
  const categories = [
    { name: 'Cybersecurity & Infra', slug: 'nordvpn-infra-cybersecurity', count: 14 },
    { name: 'DevOps & CI/CD', slug: 'devops-cicd-cloud', count: 9 },
    { name: 'Database & SQL Performance', slug: 'database-sql-tuning', count: 12 },
    { name: 'AI & Machine Learning Ops', slug: 'ai-mlops-enterprise', count: 10 }
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:py-20 max-w-5xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <span className="text-xs uppercase font-mono tracking-widest text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/60">
          SolveGrid • 7 Idiomas de Elite
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
          Arquitetura Técnica & Soluções B2B SaaS
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Guias práticos, documentação técnica, benchmarks e cupons corporativos para os 7 maiores mercados mundiais.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/growth/en-us/${cat.slug}/tecnologia-coupons`}
            className="group block p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/80 transition shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition">{cat.name}</h3>
              <span className="text-xs font-mono text-slate-500">{cat.count} módulos</span>
            </div>
            <p className="text-sm text-slate-400">Ver documentação técnica e ofertas para {cat.name}.</p>
          </Link>
        ))}
      </section>
    </main>
  );
}

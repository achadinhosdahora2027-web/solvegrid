import React from 'react';
import Link from 'next/link';

export default function SolveGridHome() {
  const b2bOffers = [
    {
      brand: 'NordVPN Enterprise',
      title: 'Dedicated IP & Cloud Gateway Defense',
      desc: 'Protect corporate remote workforce with military-grade encryption and dedicated IPs.',
      discount: '68% OFF',
      cta: 'Activate License',
      url: 'https://achadinhos-ad-engine.vercel.app/api/ads/go?brand=nordvpn&site=solvegrid&slot=home_b2b_1'
    },
    {
      brand: 'Surfshark CleanWeb',
      title: 'Endpoint Malware & Ad Defense',
      desc: 'Unified endpoint protection across unlimited team devices with zero-log auditing.',
      discount: '80% OFF',
      cta: 'Explore Suite',
      url: 'https://achadinhos-ad-engine.vercel.app/api/ads/go?brand=surfshark&site=solvegrid&slot=home_b2b_2'
    },
    {
      brand: 'Carla Corporate',
      title: 'Business Travel Fleet & Mobility',
      desc: 'Seamless corporate vehicle rental solutions across 500+ global hubs.',
      discount: 'Corporate Rates',
      cta: 'Book Fleet',
      url: 'https://achadinhos-ad-engine.vercel.app/api/ads/go?brand=carla&site=solvegrid&slot=home_b2b_3'
    }
  ];

  const categories = [
    { name: 'Cybersecurity & Infra', slug: 'nordvpn-infra-cybersecurity', count: 14 },
    { name: 'DevOps & CI/CD', slug: 'devops-cicd-cloud', count: 9 },
    { name: 'Database & SQL Performance', slug: 'database-sql-tuning', count: 12 },
    { name: 'AI & Machine Learning Ops', slug: 'ai-mlops-enterprise', count: 10 }
  ];

  return (
    <main className="min-h-screen px-4 py-12 md:py-20 max-w-5xl mx-auto space-y-16">
      <img src="https://www.ftjcfx.com/image-8041957-17288448" width="1" height="1" alt="" className="opacity-0 pointer-events-none absolute" loading="lazy" />
      <img src="https://www.tqlkg.com/image-8041957-17075184" width="1" height="1" alt="" className="opacity-0 pointer-events-none absolute" loading="lazy" />

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

      {/* Featured B2B Solutions */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white">⚡ Soluções Corporativas em Destaque</h2>
          <span className="text-xs font-mono text-indigo-400">Enterprise Verified</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {b2bOffers.map((item, idx) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/40 transition">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{item.brand}</span>
                  <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-800/50">{item.discount}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="sponsored noopener noreferrer nofollow"
                className="mt-6 block w-full py-2.5 text-center text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition"
              >
                {item.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Modules */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">📚 Módulos & Documentação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </section>
    </main>
  );
}

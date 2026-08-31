/**
 * ==============================================================================
 * AUTOMATED SOCIAL SYNDICATION & PINTEREST RSS FEED GENERATOR (SOLVEGRID)
 * ==============================================================================
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.solvegrid.com.br';
const FEEDS_DIR = path.join(__dirname, '../public/feeds');
const NOW = new Date().toUTCString();

if (!fs.existsSync(FEEDS_DIR)) {
  fs.mkdirSync(FEEDS_DIR, { recursive: true });
}

const SOLVE_CARDS = [
  {
    title: "SolveGrid Tech Pulse: Cloud, DevOps & SaaS Insights 2026",
    link: `${DOMAIN}/tech-pulse/index.html`,
    description: "Daily automated engineering intelligence, high-performance architecture patterns, and DevOps tooling.",
    image: `${DOMAIN}/favicon.ico`,
    category: "Software Engineering"
  },
  {
    title: "NordVPN Enterprise Cloud Protection & Encrypted Tunneling",
    link: `${DOMAIN}/tech-pulse/index.html#vpn`,
    description: "Secure multi-cloud nodes with dedicated IP ranges and defense-grade privacy protocols.",
    image: `${DOMAIN}/favicon.ico`,
    category: "DevOps & Security"
  }
];

function generatePinterestRss() {
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>SolveGrid Engineering & Cloud Feeds 2026</title>
    <link>${DOMAIN}</link>
    <description>Cloud architecture, DevOps tooling, and tech solutions feed.</description>
    <language>pt-BR</language>
    <lastBuildDate>${NOW}</lastBuildDate>
`;

  SOLVE_CARDS.forEach(item => {
    rss += `    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <category><![CDATA[${item.category}]]></category>
      <pubDate>${NOW}</pubDate>
      <media:content url="${item.image}" medium="image" />
    </item>\n`;
  });

  rss += `  </channel>
</rss>`;

  fs.writeFileSync(path.join(FEEDS_DIR, 'pinterest-pins.rss'), rss);
  console.log(`✓ SolveGrid Pinterest RSS gerado: public/feeds/pinterest-pins.rss`);
}

function generateTelegramSyndicationJson() {
  const payload = {
    generated_at: NOW,
    network: "SolveGrid Global Feed",
    total_campaigns: SOLVE_CARDS.length,
    broadcast_queue: SOLVE_CARDS.map(item => ({
      headline: item.title,
      target_url: item.link,
      telegram_caption: `⚙️ *${item.title}*\n\n${item.description}\n\n👉 Acesse: ${item.link}`,
      whatsapp_message: `*${item.title}*\n${item.description}\n👉 ${item.link}`,
      category: item.category
    }))
  };

  fs.writeFileSync(path.join(FEEDS_DIR, 'telegram-broadcast.json'), JSON.stringify(payload, null, 2));
  console.log(`✓ SolveGrid Telegram Broadcast JSON gerado: public/feeds/telegram-broadcast.json`);
}

function run() {
  console.log('--- GERANDO FEEDS SOLVEGRID 24/7 ---');
  generatePinterestRss();
  generateTelegramSyndicationJson();
  console.log('--- SOLVEGRID FEEDS OK ---');
}

run();

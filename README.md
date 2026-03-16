# 🌐 NeoOrbita Website

Sito web ufficiale di NeoOrbita - Software company che crea prodotti digitali innovativi.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)

## 🚀 Quick Start

### 1. Installa le dipendenze

```bash
npm install
```

### 2. Avvia il server di sviluppo

```bash
npm run dev
```

### 3. Apri il browser

Vai su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
neoorbita/
├── src/
│   ├── app/                    # Pages (App Router)
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Layout principale
│   │   ├── prodotti/           # Pagina prodotti
│   │   ├── chi-siamo/          # Pagina chi siamo
│   │   └── contatti/           # Pagina contatti
│   ├── components/             # Componenti React
│   │   ├── Navbar.tsx          # Navigation bar
│   │   └── Footer.tsx          # Footer
│   └── styles/
│       └── globals.css         # Stili globali + Tailwind
├── public/                     # Assets statici
├── tailwind.config.js          # Configurazione Tailwind
├── next.config.js              # Configurazione Next.js
└── package.json
```

## ✏️ Come Personalizzare

### Aggiungere un nuovo prodotto

Apri `src/app/prodotti/page.tsx` e aggiungi un oggetto all'array `products`:

```typescript
const products = [
  {
    id: 'nome-prodotto',
    name: 'Nome del Prodotto',
    tagline: 'Tagline accattivante',
    description: 'Descrizione del prodotto...',
    category: 'Mobile Game', // o 'App', 'AI', ecc.
    status: 'coming-soon', // 'coming-soon' | 'available' | 'beta'
    color: 'cyan', // 'cyan' | 'purple' | 'pink'
    links: {
      appStore: 'https://...',
      playStore: 'https://...',
      website: 'https://...',
    },
  },
  // ...altri prodotti
]
```

### Modificare i colori del brand

Apri `tailwind.config.js` e modifica la sezione `colors`:

```javascript
colors: {
  accent: {
    cyan: '#00f0ff',    // Colore principale
    purple: '#a855f7',  // Colore secondario
    pink: '#ec4899',    // Colore terziario
  },
}
```

### Cambiare i font

1. Modifica l'import in `src/styles/globals.css`
2. Aggiorna le variabili CSS e `tailwind.config.js`

## 🌍 Deploy

### Vercel (Raccomandato)

1. Pusha il codice su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Importa il repository
4. Deploy automatico!

### Altri hosting

```bash
npm run build
npm start
```

## 📧 Form Contatti

Il form in `/contatti` attualmente simula l'invio. Per renderlo funzionante:

1. **Formspree** (più facile): Usa [formspree.io](https://formspree.io)
2. **API Route**: Crea `src/app/api/contact/route.ts`
3. **Email service**: Integra Resend, SendGrid, ecc.

## 📝 TODO

- [ ] Aggiungere immagini prodotti
- [ ] Configurare form contatti
- [ ] Aggiungere analytics
- [ ] Creare pagine Privacy/Termini
- [ ] Aggiungere sitemap
- [ ] Configurare meta tags per social sharing

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Icone**: Lucide React
- **Font**: Syne + Outfit (Google Fonts)

---

Made with 💜 by NeoOrbita

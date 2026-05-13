# RM Gesso — Site Next.js

## Stack
- Next.js 16 · TypeScript · Tailwind CSS v4 · Lucide React

## Como rodar

```bash
npm install
npm run dev
# http://localhost:3000
```

## ⚠️ Configurar antes de publicar

Edite `lib/config.ts` e substitua:
- `SITE.phone` → número real no formato 5519XXXXXXXXX
- `SITE.phoneDisplay` → ex: (19) 99999-9999

## Estrutura

```
app/
  layout.tsx / page.tsx / globals.css

components/
  layout/   Navbar.tsx · Footer.tsx
  sections/ Hero · Stats · Services · About · Process · Contact
  ui/       WhatsAppFab · ScrollReveal

lib/
  config.ts     → dados do site (nome, telefone, serviços…)
  whatsapp.ts   → utilitário de link WhatsApp
```

## Deploy (Vercel)
```bash
npx vercel
```

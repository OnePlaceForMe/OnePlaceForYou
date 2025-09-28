# OnePlaceForYou
Réservation de tables de restaurant en 3 clics – Next.js 14, Prisma, Stripe, Mapbox.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Prisma + PostgreSQL
- Stripe (paiement)
- Mapbox (géoloc & carte)
- NextAuth (email magique)

## Développement
```bash
npm install
cp .env.example .env
npx prisma migrate dev
npx prisma db seed
npm run dev

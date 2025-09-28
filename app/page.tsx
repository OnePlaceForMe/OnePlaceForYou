'use client'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-sand">
      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-ocean mb-4">
          OnePlaceForYou
        </h1>
        <p className="text-grey-600 mb-8 max-w-xl mx-auto">
          Trouvez et réservez votre table en 3 clics, sans attendre.
        </p>
        <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
          Réserver maintenant
        </Button>
      </section>

      {/* CARTE */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-ocean mb-4">
            Restaurants autour de vous
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-4 h-96 flex items-center justify-center text-grey-400">
            Carte Mapbox – à connecter plus tard
          </div>
        </div>
      </section>
    </main>
  )
}

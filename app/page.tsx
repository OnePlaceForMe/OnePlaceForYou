'use client'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          OnePlaceForYou
        </h1>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Trouvez et réservez votre table en 3 clics, sans attendre.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Réserver maintenant
        </Button>
      </section>

      {/* CARTE */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Restaurants autour de vous
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-4 h-96 flex items-center justify-center text-gray-400">
            Carte Mapbox – à connecter plus tard
          </div>
        </div>
      </section>
    </main>
  )
}

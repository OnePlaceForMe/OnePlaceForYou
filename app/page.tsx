'use client'
import SearchBar from './SearchBar'
import Map from './Map'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-sand)' }}>
      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4" style={{ color: 'var(--color-ocean)' }}>
          OnePlaceForYou
        </h1>
        <p className="text-grey-600 mb-8 max-w-xl mx-auto">
          Trouvez et réservez votre table en 3 clics, sans attendre.
        </p>
        <SearchBar />
      </section>

      {/* CARTE */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-ocean)' }}>
            Restaurants autour de vous
          </h2>
          <Map />
        </div>
      </section>
    </main>
  )
}

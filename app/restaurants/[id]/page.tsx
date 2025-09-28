'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

type Restaurant = {
  id: string
  name: string
  address: string
  description: string
  images: string[]
  tables: { id: string; name: string; seats: number }[]
}

export default function RestaurantPage() {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch(`/api/restaurants/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
  }, [id])

  if (!restaurant) return <p>Chargement…</p>

  return (
    <main className="max-w-4xl mx-auto px-6 py-12" style={{ backgroundColor: 'var(--color-sand)' }}>
      <img
        src={restaurant.images[0]}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded-2xl mb-6"
      />
      <h1 className="text-4xl font-extrabold mb-2" style={{ color: 'var(--color-ocean)' }}>
        {restaurant.name}
      </h1>
      <p className="text-grey-600 mb-4">{restaurant.address}</p>
      <p className="text-grey-700 mb-8">{restaurant.description}</p>

      <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-ocean)' }}>
        Nos tables
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {restaurant.tables.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-grey-600">{t.seats} places</p>
            </div>
            <button
              className="text-white rounded-lg px-4 py-2"
              style={{ backgroundColor: 'var(--color-coral)' }}
            >
              Réserver
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

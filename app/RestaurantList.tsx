'use client'

import { useEffect, useState } from 'react'

type Restaurant = {
  id: string
  name: string
  address: string
  description: string
  images: string[]
  menus: { name: string; price: number }[]
}

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('/api/restaurants')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
  }, [])

  if (!restaurants.length)
    return <p className="text-grey-600">Chargement…</p>

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((r) => (
        <div
          key={r.id}
          className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
        >
          <img
            src={r.images[0]}
            alt={r.name}
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-ocean)' }}>
            {r.name}
          </h3>
          <p className="text-grey-600 text-sm mb-2">{r.address}</p>
          <p className="text-grey-700 mb-4">{r.description}</p>
          <button
            className="w-full text-white rounded-lg py-2"
            style={{ backgroundColor: 'var(--color-coral)' }}
          >
            Voir les disponibilités
          </button>
        </div>
      ))}
    </div>
  )
}

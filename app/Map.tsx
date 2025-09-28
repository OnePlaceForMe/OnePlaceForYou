'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ''

const restaurants = [
  { id: 1, name: 'Bistrot du Port', lat: 43.2955, lng: 5.3749 },
  { id: 2, name: 'Pizza Nonna', lat: 43.2976, lng: 5.3813 },
  { id: 3, name: 'Vegan Garden', lat: 43.3043, lng: 5.3803 },
]

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [5.3749, 43.2955],
      zoom: 13,
    })

    restaurants.forEach((r) => {
      new mapboxgl.Marker({ color: '#FF6B35' })
        .setLngLat([r.lng, r.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<strong>${r.name}</strong>`))
        .addTo(map)
    })

    return () => map.remove()
  }, [])

  return <div ref={mapContainer} className="w-full h-96 rounded-2xl shadow-lg" />
}

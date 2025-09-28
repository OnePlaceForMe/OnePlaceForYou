'use client'

import { useState } from 'react'

export default function SearchBar() {
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(2)

  return (
    <form className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 grid gap-4 md:grid-cols-4">
      <input
        type="text"
        placeholder="Ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded-lg px-4 py-2"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded-lg px-4 py-2"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border rounded-lg px-4 py-2"
      />
      <select
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        className="border rounded-lg px-4 py-2"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
          <option key={g} value={g}>
            {g} {g === 1 ? 'personne' : 'personnes'}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="md:col-span-4 bg-coral text-white rounded-lg py-2 hover:opacity-90"
        style={{ backgroundColor: 'var(--color-coral)' }}
      >
        Chercher
      </button>
    </form>
  )
}

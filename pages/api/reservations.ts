import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { tableId, name, email, date, guests } = req.body
    const reservation = await prisma.reservation.create({
      data: { tableId, name, email, date: new Date(date), guests: Number(guests) },
    })
    return res.status(201).json(reservation)
  }
  res.status(405).end()
}

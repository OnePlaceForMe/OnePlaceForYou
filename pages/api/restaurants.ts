import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return res.status(405).end()

  const restaurants = await prisma.restaurant.findMany({
    include: { tables: true, menus: true },
  })
  res.json(restaurants)
}

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const restaurant = await prisma.restaurant.findUnique({
    where: { id: params.id },
    include: { tables: true },
  })
  if (!restaurant) return NextResponse.json(null, { status: 404 })
  return NextResponse.json(restaurant)
}

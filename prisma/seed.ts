console.log('seed start')
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.reservation.deleteMany();
  await prisma.menu.deleteMany();
  await prisma.table.deleteMany();
  await prisma.restaurant.deleteMany();

  // 1. Bistrot du Port
  const r1 = await prisma.restaurant.create({
    data: {
      name: 'Bistrot du Port',
      address: '1 Quai des Belges, 13001 Marseille',
      lat: 43.2955,
      lng: 5.3749,
      description: 'Poissons frais, vue mer, cuisine provençale.',
      images: [
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
      ],
      tables: { create: [{ name: 'T1', seats: 2 }, { name: 'T2', seats: 4 }, { name: 'T3', seats: 6 }] },
      menus: { create: [{ name: 'Menu du jour', price: 2900 }, { name: 'Menu pêcheur', price: 4200 }] },
    },
  });

  // 2. Pizza Nonna
  const r2 = await prisma.restaurant.create({
    data: {
      name: 'Pizza Nonna',
      address: '45 Rue Saint-Ferréol, 13001 Marseille',
      lat: 43.2976,
      lng: 5.3813,
      description: 'Pizzas au feu de bois, pâtes fraîches, ambiance familiale.',
      images: ['https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b'],
      tables: { create: [{ name: 'P1', seats: 2 }, { name: 'P2', seats: 4 }, { name: 'P3', seats: 8 }] },
      menus: { create: [{ name: 'Margherita + boisson', price: 1400 }, { name: 'Menu duo pizza + dessert', price: 2200 }] },
    },
  });

  // 3. Vegan Garden
  await prisma.restaurant.create({
    data: {
      name: 'Vegan Garden',
      address: '12 Boulevard Longchamp, 13001 Marseille',
      lat: 43.3043,
      lng: 5.3803,
      description: 'Cuisine 100 % végétale, produits locaux, sans gluten.',
      images: ['https://images.unsplash.com/photo-1540189549336-e6e99c3679fe'],
      tables: { create: [{ name: 'V1', seats: 2 }, { name: 'V2', seats: 4 }] },
      menus: { create: [{ name: 'Veggie bowl', price: 1800 }, { name: 'Menu détox 3 plats', price: 2600 }] },
    },
  });

  console.log('✅ Seed terminé : 3 restaurants, tables, menus');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });



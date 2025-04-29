import { categories, ingredients, products } from "./constants";

import {hashSync} from 'bcrypt'
import { Prisma } from "@prisma/client";
import { prisma } from "./prisma-client"


const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generatePizza = (productId: number, type: number, size: number) => {
  return {
    productId,
    size,
    type,
    price: randomNumber(190, 600),
    carbs: randomNumber(10, 30),
    fats: randomNumber(5, 15),
    kcal: randomNumber(180, 300),
    proteins: randomNumber(20, 45),
    weight: randomNumber(400, 650),
  };
};

async function up() {
    
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User',
                email: 'user@test.ru',
                password: hashSync('111111',10),
                verified: new Date(),
                role: 'USER', 
            },
            {
                fullName: 'Admin',
                email: 'admin@test.ru',
                password: hashSync('111111',10),
                verified: new Date(),
                role: 'ADMIN', 
            }
        ]
    })

    await prisma.category.createMany({
        data: categories
    })

    await prisma.ingredient.createMany({
        data: ingredients
    })

    await prisma.product.createMany({
        data: products
    })

    const pizza1 = await prisma.product.create({
        data: {
            name: 'Пепперони фреш',
            imageUrl:
              'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
            ingredients: {
                connect: ingredients.slice(0, 5)
            },
          },
      });

      const pizza2 = await prisma.product.create({
        data: {
            name: 'Пепперони фреш2',
            imageUrl:
              'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
            ingredients: {
                connect: ingredients.slice(0, 5)
            },
          },
      });

    await prisma.productItem.createMany({
        data: [
            generatePizza(1, 1, 20),
            generatePizza(1, 2, 30),
            generatePizza(1, 3, 40),
      
            generatePizza(2, 1, 20),
            generatePizza(2, 2, 30),
            generatePizza(2, 3, 40),
      
            generatePizza(3, 1, 20),
            generatePizza(3, 2, 30),
            generatePizza(3, 3, 40),
          ],
    })

    

}

async function down() {
    await prisma.$executeRaw `TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw `TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw `TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;

}

async function main() {
    try {
        await down()
        await up()

    } catch (e) {
        console.error(e)
    }

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch (async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
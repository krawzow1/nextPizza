import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client"
import {hashSync} from 'bcrypt'

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

    await prisma.category.createMany({
        data: products
    })

}

async function down() {
    await prisma.$executeRaw `TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`; 

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
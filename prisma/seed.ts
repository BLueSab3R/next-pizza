import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { categories, ingredients, products } from "./constants";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: number;
  size?: number;
}): Prisma.ProductItemUncheckedCreateInput => {
  return {
    productId,
    price: randomNumber(100, 250),
    pizzaType,
    size,
  };
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Sonali",
        email: "sonali@prisma.io",
        password: hashSync("123456", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@prisma.io",
        password: hashSync("123456", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.ingredient.createMany({
    data: ingredients,
  });
  await prisma.product.createMany({
    data: products,
  });
  const firstPizza = await prisma.product.create({
    data: {
      name: "Pepperoni Lovers",
      imageUrl:
        "https://pizzahut-images.futureordering.com/images/product/4/FA35B15078575E1B43939C02B7EAC9E0D/760x706.jpg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });
  const secondPizza = await prisma.product.create({
    data: {
      name: "Pulled Beef BBQ",
      imageUrl:
        "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });
  const thirdPizza = await prisma.product.create({
    data: {
      name: "Vesuvio",
      imageUrl:
        "https://pizzahut-images.futureordering.com/images/product/74/B3B1A320DAB652FDBCE346B348D1C042D/760x706.jpg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 15),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      //Pepperoni Lovers
      generateProductItem({
        productId: firstPizza.id,
        pizzaType: 1,
        size: 30,
      }),
      generateProductItem({
        productId: firstPizza.id,
        pizzaType: 2,
        size: 40,
      }),
      generateProductItem({
        productId: firstPizza.id,
        pizzaType: 2,
        size: 50,
      }),

      //Pulled Beef BBQ
      generateProductItem({
        productId: secondPizza.id,
        pizzaType: 1,
        size: 30,
      }),
      generateProductItem({
        productId: secondPizza.id,
        pizzaType: 1,
        size: 40,
      }),
      generateProductItem({
        productId: secondPizza.id,
        pizzaType: 1,
        size: 50,
      }),
      generateProductItem({
        productId: secondPizza.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductItem({
        productId: secondPizza.id,
        pizzaType: 2,
        size: 40,
      }),
      generateProductItem({
        productId: secondPizza.id,
        pizzaType: 2,
        size: 50,
      }),
      //vesuvio
      generateProductItem({
        productId: thirdPizza.id,
        pizzaType: 1,
        size: 30,
      }),
      generateProductItem({
        productId: thirdPizza.id,
        pizzaType: 2,
        size: 40,
      }),
      generateProductItem({
        productId: thirdPizza.id,
        pizzaType: 2,
        size: 50,
      }),
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });

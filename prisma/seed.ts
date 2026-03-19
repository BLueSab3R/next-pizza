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
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
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
        size: 40,
      }),

      //Pulled Beef BBQ
      generateProductItem({
        productId: secondPizza.id,
        pizzaType: 1,
        size: 20,
      }),
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
        pizzaType: 2,
        size: 20,
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
        size: 40,
      }),

      generateProductItem({
        productId: 1,
      }),
      generateProductItem({
        productId: 2,
      }),
      generateProductItem({
        productId: 3,
      }),
      generateProductItem({
        productId: 4,
      }),
      generateProductItem({
        productId: 5,
      }),
      generateProductItem({
        productId: 6,
      }),
      generateProductItem({
        productId: 7,
      }),
      generateProductItem({
        productId: 8,
      }),
      generateProductItem({
        productId: 9,
      }),
      generateProductItem({
        productId: 10,
      }),
      generateProductItem({
        productId: 11,
      }),
      generateProductItem({
        productId: 12,
      }),
      generateProductItem({
        productId: 13,
      }),
      generateProductItem({
        productId: 14,
      }),
      generateProductItem({
        productId: 15,
      }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "123",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "123",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
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

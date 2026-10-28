import { PrismaPg } from "@prisma/adapter-pg";
import { Prisma, PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";
import "dotenv/config";
import { Pool } from "pg";
import { categories, ingredients, products } from "./constants";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const generatePrice = (pizzaType?: 1 | 2, size?: 20 | 30 | 40) => {
  const basePrice = 5;
  let totalPrice = basePrice;
  if (size === 30) totalPrice += 3.5;
  if (size === 40) totalPrice += 7.0;
  if (pizzaType === 2) totalPrice += 1.0;
  return totalPrice;
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
    price: generatePrice(pizzaType, size),
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
        connect: ingredients.slice(0, 9),
      },
      description:
        "Loaded with a double portion of smoky pepperoni and extra mozzarella for the ultimate classic flavor.",
    },
  });
  const secondPizza = await prisma.product.create({
    data: {
      name: "Pulled Beef BBQ",
      imageUrl:
        "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(4, 15),
      },
      description:
        "Tender, slow-cooked beef paired with rich, smoky BBQ sauce and crisp red onions.",
    },
  });
  const thirdPizza = await prisma.product.create({
    data: {
      name: "Vesuvio",
      imageUrl:
        "https://pizzahut-images.futureordering.com/images/product/74/B3B1A320DAB652FDBCE346B348D1C042D/760x706.jpg",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 15),
      },
      description:
        "A timeless Italian favorite featuring classic ham and melted mozzarella over a rich tomato base.",
    },
  });

  await prisma.productItem.createMany({
    data: [
      generateProductItem({
        productId: firstPizza.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductItem({
        productId: firstPizza.id,
        pizzaType: 1,
        size: 30,
      }),
      generateProductItem({
        productId: firstPizza.id,
        pizzaType: 1,
        size: 40,
      }),
      generateProductItem({
        productId: firstPizza.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductItem({
        productId: firstPizza.id,
        pizzaType: 2,
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

      generateProductItem({
        productId: thirdPizza.id,
        pizzaType: 1,
        size: 30,
      }),
      generateProductItem({
        productId: thirdPizza.id,
        pizzaType: 1,
        size: 40,
      }),
      generateProductItem({
        productId: thirdPizza.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductItem({
        productId: thirdPizza.id,
        pizzaType: 2,
        size: 40,
      }),

      { productId: 1, price: 4.5 },
      { productId: 2, price: 3.0 },
      { productId: 3, price: 6.5 },
      { productId: 4, price: 2.5 },
      { productId: 5, price: 12.0 },
      { productId: 6, price: 3.5 },
      { productId: 7, price: 4.0 },
      { productId: 8, price: 5.5 },
      { productId: 9, price: 2.0 },
      { productId: 10, price: 7.0 },
      { productId: 11, price: 4.5 },
      { productId: 12, price: 3.0 },
      { productId: 13, price: 8.5 },
      { productId: 14, price: 9.0 },
      { productId: 15, price: 2.5 },
      { productId: 16, price: 4.0 },
      { productId: 17, price: 3.5 },
      { productId: 18, price: 6.0 },
      { productId: 19, price: 5.0 },
      { productId: 20, price: 2.5 },
      { productId: 21, price: 3.0 },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "1111",
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
  await prisma.cartItem.create({
    data: {
      productItemId: 2,
      cartId: 1,
      quantity: 3,
      ingredients: {
        connect: [{ id: 4 }, { id: 5 }, { id: 6 }],
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

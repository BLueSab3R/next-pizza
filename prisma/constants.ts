export const categories = [
  { name: "Pizzas" },
  { name: "Combos" },
  { name: "Snacks" },
  { name: "Sandwich" },
  { name: "Drinks" },
  { name: "Desserts" },
];

export const ingredients = [
  {
    name: "Pepperoni (pork)",
    price: 3,
    imageUrl: "/ingredients/peperoni-pork.png",
  },
  {
    name: "Pepperoni (halal)",
    price: 2,
    imageUrl: "/ingredients/peperoni-halal.png",
  },
  {
    name: "Chicken kebab",
    price: 3,
    imageUrl: "/ingredients/chicken-kebab.png",
  },
  {
    name: "Skinka",
    price: 3,
    imageUrl: "/ingredients/skinka.png",
  },
  {
    name: "Chicken Fajitas",
    price: 2,
    imageUrl: "/ingredients/chicken-fajitas.png",
  },
  {
    name: "Beef kebab",
    price: 2,
    imageUrl: "/ingredients/beef-kebab.png",
  },
  {
    name: "Beef",
    price: 2,
    imageUrl: "/ingredients/beef.png",
  },
  {
    name: "Bacon",
    price: 2,
    imageUrl: "/ingredients/bacon.png",
  },
  {
    name: "Sun-dried tomatoes",
    price: 1,
    imageUrl: "/ingredients/sun-dried-tomatoes.png",
  },
  {
    name: "Red onion",
    price: 1,
    imageUrl: "/ingredients/red-onion.png",
  },
  {
    name: "Ananas",
    price: 1,
    imageUrl: "/ingredients/ananas.png",
  },
  {
    name: "Champinjon",
    price: 1,
    imageUrl: "/ingredients/champinjon.png",
  },
  {
    name: "Paprika",
    price: 1,
    imageUrl: "/ingredients/paprika.png",
  },
  {
    name: "Mozzarella",
    price: 1,
    imageUrl: "/ingredients/mozzarella.png",
  },
  {
    name: "Feta cheese",
    price: 1,
    imageUrl: "/ingredients/feta-cheeze.png",
  },
  {
    name: "Cheddar",
    price: 1,
    imageUrl: "/ingredients/cheddar.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "SNACKPLATE - SMALL",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1654/3DB015F32247F5F187E46CEAEE457846D/760x706.jpg",
    description: "Välj två av dina favorit sides",
    categoryId: 3,
  },
  {
    name: "SNACKPLATE - MEDIUM",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1655/79343FD78F4D4E161B17B12DD09248DAD/760x706.jpg",
    description: "Välj fyra av dina favorit sides",
    categoryId: 3,
  },
  {
    name: "Fanta Crimson Cherry Deal",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/3173/CF2106F39477A1A8BC5B7EE0A8A0753AD/380x354.jpg",
    description: "Up to 30% discount! 2x Medium PAN & 2x 50cl sodas",
    categoryId: 2,
  },
  {
    name: "All-in",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/2398/9D9CBB30BA627309767062E9F8677FE7D/380x354.jpg",
    description: "Medium PAN, Side & Beverage",
    categoryId: 2,
  },
  {
    name: "Big Sharer",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/2400/731E45DAC57A4E50013E76313AC7FA25D/380x354.jpg",
    description: "Large PAN, Side & 2x Beverage",
    categoryId: 2,
  },
  {
    name: "Family Deal",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/2401/4991D307378C9FBA6BEE5EAB28520F0DD/380x354.jpg",
    description: "2x Large PAN, 2x Side & 4x Beverage",
    categoryId: 2,
  },
  {
    name: "PULLED BEEF SANDWICH",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1348/D3B124115DAE125532F7D0DD410E47ACD/760x706.jpg",
    description:
      "Ciabatta, BBQ Sås, Mozzarella, Pulled Beef, Jalapeños, Isbergssallad, Vitlökssås",
    categoryId: 4,
  },

  {
    name: "SPICY TUNA SANDWICH",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/3002/B395780F582B982438B6279FFA2F1CB4D/760x706.jpg",
    description:
      "Ciabatta, Mozzarella, Tonfisk, Rödlök, Jalapeños, Franks Hot Sauce, Chiliflakes, Majonnäs",
    categoryId: 4,
  },
  {
    name: "CHICKEN SANDWICH",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1351/71A6036F1D70ECA39F836885D49DEF66D/760x706.jpg",
    description:
      "Ciabatta, Mozzarella, Grillad Kyckling, Cocktailtomater, Isbergssallad, Majonnäs",
    categoryId: 4,
  },
  {
    name: "VITLÖKSBRÖD",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1657/5784B13179803D827C6A214F2091127CD/760x706.jpg",
    description: "Klassiskt rostat bröd med vitlökssmör",
    categoryId: 3,
  },
  {
    name: "VITLÖKSBRÖD SUPREME",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1645/F3139917D1C938DBF6D95E3BF677825CD/760x706.jpg",
    description: "Vitlöksbröd toppat med smält mozzarella",
    categoryId: 3,
  },
  {
    name: "VITLÖKSBRÖD PEPPERONI",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1646/5D8E41047371E60100A558B9D1B14ED4D/760x706.jpg",
    description: "Vitlöksbröd med mozzarella och pepperoni",
    categoryId: 3,
  },
  {
    name: "CHILI CHEESE",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1515/1A4BBB1298CC94A6F97FD5E4DA9A5928D/760x706.jpg",
    description: "Frasiga bollar fyllda med smält ost och jalapenos",
    categoryId: 3,
  },
  {
    name: "POMMES FRITES",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1516/C1D900100D5D33D47CD7A50003CB9B80D/760x706.jpg",
    description: "Klassiska tunna och krispiga pommes frites",
    categoryId: 3,
  },
  {
    name: "SALLADSBUFFÉ",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/342/B2DCC3B947737E046167103C7C865A3BD/380x354.png",
    description: "Välj dina favoriter från vår fräscha salladsbar",
    categoryId: 3,
  },
  {
    name: "CHEESE TRIANGLES",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1643/97EDA96C7F9C348DE98757B626B4F22DD/380x354.jpg",
    description: "Friterade osttrianglar",
    categoryId: 3,
  },
  {
    name: "LÖKRINGAR",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/1640/3380856C3C4F60283F5084BB66CBDE4CD/380x354.jpg",
    description: "Krispiga friterade lökringar",
    categoryId: 3,
  },
  {
    name: "Soda",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/404/87D8557DC3D794A354BA27D27DBA872BD/760x706.jpg",
    description: "Self-service at the soda machine",
    categoryId: 5,
  },
  {
    name: "Soda with free refills",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/883/7E832FCC7F8731BBBD152472E33836D9D/760x706.jpg",
    description: "Self-service at the soda machine",
    categoryId: 5,
  },
  {
    name: "Koffe",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/418/107A522170C69959238BC78283503C6BD/760x706.jpg",
    description: "Self-service at the soda machine",
    categoryId: 5,
  },
  {
    name: "Tea",
    imageUrl:
      "https://pizzahut-images.futureordering.com/images/product/419/D5427008005E84D3E598D432F006A259D/760x706.jpg",
    description: "Self-service at the soda machine",
    categoryId: 5,
  },
];

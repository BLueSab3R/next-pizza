export const mapPizzaSize = {
  20: "Small",
  30: "Medium",
  40: "Big",
} as const;

export const mapPizzaType = {
  1: "Traditional",
  2: "Thin",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  value,
  name,
}));

export const pizzaTypes = Object.entries(mapPizzaType).map(([name, value]) => ({
  name,
  value,
}));

export type pizzaSize = keyof typeof mapPizzaSize;
export type pizzaType = keyof typeof mapPizzaType;

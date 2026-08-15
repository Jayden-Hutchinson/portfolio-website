export type Product = {
  image: string;
  name: string;
  price: number;
  weightGrams: number;
  description: string;
};

// 80 grams = $10
export const ProductsData: Product[] = [
  {
    image: "src/assets/sweet_sriracha.jpg",
    name: "Sweet Sriracha",
    price: 10,
    weightGrams: 80,
    description: "Sweet and spicy flavors with the bold kick of sriracha.",
  },
];

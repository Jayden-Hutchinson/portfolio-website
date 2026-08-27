import sweetSriracha from "../assets/sweet_sriracha.jpg";

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
    image: sweetSriracha,
    name: "Sweet Sriracha",
    price: 20,
    weightGrams: 160,
    description: "Sweet and spicy flavors with the bold kick of sriracha.",
  },
];

import Hero from "./components/sections/hero";
import Category from "./components/sections/category";
import Products from "./components/sections/products";
import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ])

  return (
    <>
    <Hero/>
    <Category categories={categories}/>
    <Products products={products}/>
    </>
  );
}

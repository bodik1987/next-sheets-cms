import { unstable_noStore as noStore } from "next/cache";
import { getSheetData, Product } from "../actions/getSheetData";
import Card from "./card";
import Link from "next/link";

// Функция для группировки по категориям
const groupByCategory = (products: Product[]): Record<string, Product[]> => {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);
};

export default async function CmsSection() {
  noStore(); // Disable cache
  const products = await getSheetData();
  const groupedProducts = groupByCategory(products);

  return (
    <section className="max-w-5xl mx-auto w-full p-4">
      <Link
        target="_blank"
        href={`https://docs.google.com/spreadsheets/d/1sfP1-kzLyJPD4KmCJA9LCmxkYVir1TjunNQvDP9lEGc/edit?gid=0#gid=0`}
        className="font-medium text-xl text-green-600"
      >
        Google sheet CMS link
      </Link>
      {Object.entries(groupedProducts).map(([category, products]) => (
        <section key={category} className="mt-4 ">
          <h2 className="text-xl font-bold">{category}</h2>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.name}
                img={product.imageUrl}
                servings={product.servings}
                link={product.link}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

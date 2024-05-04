import Product from "./product";
import { client } from "@/graphql/graphqlSettings";
import { ProductType, productQuery } from "@/graphql/products";

export const ProductList = async () => {
  const data = await client.request<ProductType>(productQuery);

  const products = data.productsCollection.items;
  return (
    <div className="container relative w-full z-10">
      <div className=" py-10 mt-32 w-full h-full grid grid-cols-12 bg-white gap-8">
        {products.map((product) => (
          <Product
            key={product.titill.replaceAll(" ", "")}
            image={product.image}
            titill={product.titill}
          />
        ))}
      </div>
    </div>
  );
};

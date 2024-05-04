import { ProductItemType, ProductType } from "@/graphql/products";
import Image from "next/image";

const Product = ({ image, titill }: ProductItemType) => {
  return (
    <div className="col-span-3 mb-10 shadow-xl">
      <div className="flex flex-col justify-between items-center">
        <Image
          alt={titill}
          src={image.url}
          style={{ objectFit: "fill" }}
          width={300}
          height={150}
        />
        <h5 className="py-5 text-lg">{titill}</h5>
      </div>
    </div>
  );
};

export default Product;

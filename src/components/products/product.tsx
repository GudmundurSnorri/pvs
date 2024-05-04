import { ProductItemType, ProductType } from "@/graphql/products";
import Image from "next/image";

const Product = ({ image, titill }: ProductItemType) => {
  return (
    <div className="col-span-3 mb-10">
      <div className="flex flex-col justify-between items-center">
        <Image
          alt={titill}
          src={image.url}
          style={{ objectFit: "fill" }}
          width={300}
          height={150}
        />
        <h5 className="py-2">{titill}</h5>
      </div>
    </div>
  );
};

export default Product;

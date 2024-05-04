import { gql } from "graphql-request";

export const productQuery = gql`
  {
    productsCollection {
      items {
        titill
        image {
          url
        }
      }
    }
  }
`;

export type ProductType = {
  productsCollection: {
    items: ProductItemType[];
  };
};

export type ProductItemType = {
  image: {
    url: string;
  };
  titill: string;
};

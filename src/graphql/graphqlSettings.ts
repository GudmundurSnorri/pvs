import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(process.env.CONTENTFUL_LINK!, {
  headers: {
    authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
  },
});

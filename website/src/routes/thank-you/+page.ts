import { GraphQLClient } from "graphql-request";

export async function load() {
  const hygraph = new GraphQLClient(
    "https://us-west-2.cdn.hygraph.com/content/clgpz5qi40u9n01rrh0w6hz8i/master",
    {
      headers: {},
    }
  );

  const { headshots, signatures } = await hygraph.request(
    `{
          headshots {
            imageFace {
              url
            }
          }
      }`
  );

  return {
    props: {
      headshots,
    },
  };
}
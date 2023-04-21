import { GraphQLClient } from "graphql-request";

export const prerender = true;

export async function load() {
  const hygraph = new GraphQLClient(
    "https://us-west-2.cdn.hygraph.com/content/clgpz5qi40u9n01rrh0w6hz8i/master",
    {
      headers: {},
    }
  );

  const { projects } = await hygraph.request(
    `{
          projects(orderBy: order_ASC) {
            title
            description
            link
            previewImage {
              url
            }
          }
      }`
  );

  return {
    props: {
      projects,
    },
  };
}
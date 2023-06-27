import { GraphQLClient } from "graphql-request";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const hygraph = new GraphQLClient(
    "https://us-west-2.cdn.hygraph.com/content/clgpz5qi40u9n01rrh0w6hz8i/master",
    {
      headers: {},
    }
  );

  const { notes } = await hygraph.request(
    `{
          notes(where: {active: true, slug_contains: "${params.slug}"}) {
            title
            seoSummary
            lastModified
            htmlDescription {
                html
            }
            tags
          }
      }`
  );

  return {
    props: {
      notes,
    },
  };
}
import { GraphQLClient, gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;

const asynchandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: { authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}` },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
};

export default asynchandler;

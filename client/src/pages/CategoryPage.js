import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql } from "@apollo/client";

const CATGO_QUERY = gql`
  query ($slug: String!) {
    category(slug: $slug) {
      id
      category
      slug
      animals {
        id
        title
        price
        image
      }
    }
  }
`;

function CategoryPage() {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(CATGO_QUERY, {
    variables: { slug },
  });

  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>Error Occurred</h1>;

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {data.category.category}
          <CardDisplay animals={data.category.animals} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;

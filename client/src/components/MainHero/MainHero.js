import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";

function MainHero() {
  const { loading, error, data } = useQuery(gql`
    {
      cards {
        title
        image
      }
    }
  `);

  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>Error Occured</h1>;
  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} />
        </div>
        <div className="cards-container">
          {data.cards.map((card) => {
            return (
              <div className="card">
                <h3>{card.title}</h3>
                <img src={animals[card.image]} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;

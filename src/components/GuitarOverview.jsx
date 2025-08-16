// src/pages/GuitarDetails/GuitarOverview.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "../styles/guitarOverview.css"; // now uses its own file
import logoIcon from "../assets/Butterfly.png";
import logoText from "../assets/VibeStrings.png";

const GET_GUITAR_INFO = gql`
  query GetGuitar($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      image
      price
      type
      description
    }
  }
`;

export default function GuitarOverview() {
  const { brandId, modelId } = useParams();

  const { loading, error, data } = useQuery(GET_GUITAR_INFO, {
    variables: { brandId, modelId },
    skip: !brandId || !modelId
  });

  if (loading) return <p>Loading guitar details...</p>;
  if (error) return <p>Error loading guitar: {error.message}</p>;

  const guitar = data?.findUniqueModel;
  if (!guitar) return <p>Guitar not found.</p>;

  return (
    <section className="guitar-overview-section">
      <div className="guitar-overview-text">
        <Link to={`/brand/${brandId}`} className="guitar-back-link">
          ← Back To List
        </Link>

        <div className="guitar-info-block">
          <div className="guitar-logo">
            <img src={logoIcon} alt="VibeStrings logo" />
            <img src={logoText} alt="VibeStrings text" />
          </div>
          <h1 className="guitar-heading">
            {guitar.name} <span className="guitar-highlight">{guitar.type}</span>
          </h1>
          
        </div>
      </div>

      <div className="guitar-overview-image">
        <div className="guitar-orange-bg">
          <img src={guitar.image} alt={guitar.name} />
          <div className="guitar-curve-icon">
            <img src={logoIcon} alt="small logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

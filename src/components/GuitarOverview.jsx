
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "../styles/guitarOverview.css"; 
import logoIcon from "../assets/Butterfly.png";
import { useLanguage } from "../context/Languagecontext";



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
  const { t } = useLanguage(); // t() returns the translated string


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
   {t("backToList")}
</Link>


        <div className="guitar-info-block">
          <div className="guitar-logo">
            <img src={logoIcon} alt="VibeStrings logo" />
           <p className="vibeStrings">VibeStrings</p>
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

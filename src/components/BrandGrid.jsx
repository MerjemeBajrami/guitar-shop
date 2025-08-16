import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import '../styles/brandGrid.css';
import { useLanguage } from "../context/Languagecontext";

const GET_BRANDS = gql`
  query {
    findAllBrands {
      id
      name
      image
    }
  }
`;

export default function BrandGrid() {
  const { t } = useLanguage();
  const { loading, error, data } = useQuery(GET_BRANDS);

  if (loading) return <p className="loading">{t("loading")}</p>;
  if (error) return <p className="error">{t("error")}</p>;

  return (
    <section className="brand-section">
      <h2>
        {t("featuringBrands").split("Best Brands").map((part, i) => 
          i === 0 ? part : <span key={i} className="highlight">Best Brands</span>
        )}
      </h2>
      <p>{t("selectPreferred")}</p>
      <div className="brand-grid">
        {data.findAllBrands.slice(0, 8).map((brand) => (
          <Link
            key={brand.id}
            to={`/guitars/${brand.id}`}
            className="brand-card"
          >
            <img src={brand.image} alt={brand.name} className="brand-image1" />
            <p style={{ display: "none" }}>{brand.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

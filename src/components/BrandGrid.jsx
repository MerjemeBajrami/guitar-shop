import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import '../styles/brandGrid.css';

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
  const { loading, error, data } = useQuery(GET_BRANDS);

  if (loading) return <p className="loading">Loading brands...</p>;
  if (error) return <p className="error">Error loading brands.</p>;

  return (
    <section className="brand-section">
      <h2>
        Featuring the <span className="highlight">Best Brands</span>
      </h2>
      <p>Select your preferred brand and explore our collection.</p>
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

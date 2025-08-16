import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "../styles/brandInfo.css";
import logoIcon from "../assets/Butterfly.png";
import logoText from "../assets/VibeStrings.png";

const GET_BRAND_INFO = gql`
  query GetBrand($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      origin
      image
    }
  }
`;

// Custom text for each brand
const brandContent = {
  Ibanez: {
    heading: <>Play like a <span className="highlight">Rock star</span></>,
    paragraph:
      "With a legacy dating back to the 1950s, Ibanez blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance."
  },
  Fender: {
    heading: <>Strum with <span className="highlight">Legendary Tone</span></>,
    paragraph:
      "Since 1946, Fender has shaped the sound of modern music. From the bright twang of a Telecaster to the smooth warmth of a Strat, Fender guitars are trusted by legends and loved by beginners alike."
  },
  Gibson: {
    heading: <>Own the <span className="highlight">Stage</span></>,
    paragraph:
      "Gibson guitars have fueled rock, blues, and jazz for over a century. Known for their powerful tone and timeless design, they remain the weapon of choice for iconic performers."
  },
  Yamaha: {
    heading: <>Play with <span className="highlight">Precision</span></>,
    paragraph:
      "Yamaha guitars combine Japanese craftsmanship with versatile design, offering rich tone and reliability for musicians of every style."
  }
};

export default function BrandInfo() {
  const { brandId } = useParams();

  const { loading, error, data } = useQuery(GET_BRAND_INFO, {
    variables: { id: brandId },
    skip: !brandId
  });

  if (loading) return <p>Loading brand info...</p>;
  if (error) return <p>Error loading brand info: {error.message}</p>;

  const brand = data?.findUniqueBrand;
  if (!brand) return <p>Brand not found.</p>;

  const content = brandContent[brand.name] || {
    heading: <>Discover the <span className="highlight">Sound</span></>,
    paragraph:
      "This brand offers a unique mix of quality craftsmanship and inspiring tone — perfect for taking your music to the next level."
  };

  return (
    <>
      <section className="brand-info">
        <div className="brand-text">
          <a href="/" className="back-link">← Back To Home</a>

          <div className="the_info">
            <div className="brand-logo">
              <img src={logoIcon} alt="VibeStrings logo" />
              <img src={logoText} alt="VibeStrings text" />
            </div>
            <h1 id="head_brand">{content.heading}</h1>
            <p id="p_brand">{content.paragraph}</p>
          </div>
        </div>

        <div className="brand-image">
          <div className="orange-bg">
            <img src={brand.image} alt={brand.name} />
            <div className="curve1">
              <img src={logoIcon} alt="small logo" />
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
}

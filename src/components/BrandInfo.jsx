import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "../styles/brandInfo.css";
import logoIcon from "../assets/Butterfly.png";
import { useLanguage } from "../context/Languagecontext";

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

export default function BrandInfo() {
  const { t } = useLanguage(); // translation function
  const { brandId } = useParams();

  const { loading, error, data } = useQuery(GET_BRAND_INFO, {
    variables: { id: brandId },
    skip: !brandId
  });

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{t("error")}</p>;

  const brand = data?.findUniqueBrand;
  if (!brand) return <p>{t("error")}</p>;

  // Fetch brand-specific content from translations
  const content =
    (t("brandContent") && t("brandContent")[brand.name]) || {
      heading: <>Discover the <span className="highlight">Sound</span></>,
      paragraph:
        "This brand offers a unique mix of quality craftsmanship and inspiring tone — perfect for taking your music to the next level."
    };

  return (
    <section className="brand-info">
      <div className="brand-text">
        {/* Back link uses translation */}
        <a href="/" className="back-link">{t("backToHome")}</a>

        <div className="the_info">
          <div className="brand-logo">
            <img src={logoIcon} alt="VibeStrings logo" />
            <p className="vibeStrings">VibeStrings</p>
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
  );
}

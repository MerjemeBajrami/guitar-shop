import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "../styles/guitarSpecification.css";
import MusiciansCarousel from "../components/MusiciansCarousel";
import { useLanguage } from "../context/Languagecontext";

const GET_GUITAR_SPECIFICATION = gql`
  query GetGuitarSpecification($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      description
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
      }
    }
  }
`;

export default function GuitarSpecification() {
  const { t } = useLanguage(); // translation function
  const { brandId, modelId } = useParams();
  const [activeTab, setActiveTab] = useState("specification");

  const { loading, error, data } = useQuery(GET_GUITAR_SPECIFICATION, {
    variables: { brandId, modelId },
    skip: !brandId || !modelId,
  });

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{t("error")}: {error.message}</p>;

  const guitar = data?.findUniqueModel;
  if (!guitar) return <p>{t("error")}</p>;

  const { specs, musicians } = guitar;

  return (
    <section className="guitar-spec-section">
      {/* Top Tabs */}
      <div className="guitar-spec-tabs">
        <h2
          className={activeTab === "specification" ? "active-tab" : "inactive-tab"}
          onClick={() => setActiveTab("specification")}
        >
          {t("specification")}
        </h2>
        <h2
          className={activeTab === "musicians" ? "active-tab" : "inactive-tab"}
          onClick={() => setActiveTab("musicians")}
        >
          {t("musicians")}
        </h2>
      </div>

      {/* Specification Tab Content */}
      {activeTab === "specification" && (
        <div className="guitar-spec-content">
          <p className="guitar-spec-description">{guitar.description}</p>
          <ul className="guitar-spec-list">
            <li>{t("Body Wood")}: "{specs.bodyWood}"</li>
            <li>{t("Neck Wood")}: "{specs.neckWood}"</li>
            <li>{t("Fingerboard")}: "{specs.fingerboardWood}"</li>
            <li>{t("Pickups")}: "{specs.pickups}"</li>
            <li>{t("Tuners")}: "{specs.tuners}"</li>
            <li>{t("Scale Length")}: "{specs.scaleLength}"</li>
            <li>{t("Bridge")}: "{specs.bridge}"</li>
          </ul>
        </div>
      )}

      {/* Musicians Tab Content */}
      {activeTab === "musicians" && (
        <div className="musicians-tab">
          <MusiciansCarousel musicians={musicians} />
        </div>
      )}
    </section>
  );
}

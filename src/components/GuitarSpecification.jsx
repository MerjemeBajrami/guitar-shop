// src/pages/GuitarDetails/GuitarSpecification.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "../styles/guitarSpecification.css";
import MusiciansCarousel from "../components/MusiciansCarousel";

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
  const { brandId, modelId } = useParams();
  const [activeTab, setActiveTab] = useState("specification");

  const { loading, error, data } = useQuery(GET_GUITAR_SPECIFICATION, {
    variables: { brandId, modelId },
    skip: !brandId || !modelId
  });

  if (loading) return <p>Loading specifications...</p>;
  if (error) return <p>Error loading specs: {error.message}</p>;

  const guitar = data?.findUniqueModel;
  if (!guitar) return <p>No specification found.</p>;

  const { specs, musicians } = guitar;

  return (
    <section className="guitar-spec-section">
      {/* Top Tabs */}
      <div className="guitar-spec-tabs">
        <h2
          className={activeTab === "specification" ? "active-tab" : "inactive-tab"}
          onClick={() => setActiveTab("specification")}
        >
          Specification
        </h2>
        <h2
          className={activeTab === "musicians" ? "active-tab" : "inactive-tab"}
          onClick={() => setActiveTab("musicians")}
        >
          Who plays it?
        </h2>
      </div>

      {/* Specification Tab Content */}
      {activeTab === "specification" && (
        <div className="guitar-spec-content">
          <p className="guitar-spec-description">{guitar.description}</p>
          <ul className="guitar-spec-list">
            <li>Body Wood: "{specs.bodyWood}"</li>
            <li>Neck Wood: "{specs.neckWood}"</li>
            <li>Fingerboard: "{specs.fingerboardWood}"</li>
            <li>Pickups: "{specs.pickups}"</li>
            <li>Tuners: "{specs.tuners}"</li>
            <li>Scale Length: "{specs.scaleLength}"</li>
            <li>Bridge: "{specs.bridge}"</li>
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

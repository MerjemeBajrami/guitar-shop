import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "../styles/guitar_selection.css";
import { Link } from "react-router-dom";


const GET_MODELS_BY_BRAND = gql`
  query GetModelsByBrand($id: ID!, $sortBy: sortBy!) {
    findBrandModels(id: $id, sortBy: $sortBy) {
      id
      name
      image
      price
      type
    }
  }
`;

export default function GuitarSelection() {
  const { brandId } = useParams();
  const [page, setPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 6;

  const { loading, error, data } = useQuery(GET_MODELS_BY_BRAND, {
    variables: {
      id: brandId,
      sortBy: { field: "name", order: "ASC" },
    },
  });

  if (loading) return <p>Loading guitars...</p>;
  if (error) {
    console.error(error);
    return <p>Error loading guitars.</p>;
  }

  let guitars = data.findBrandModels;

  // Filter by type
  if (selectedValue) {
    guitars = guitars.filter(
      (guitar) => guitar.type.toLowerCase() === selectedValue.toLowerCase()
    );
  }

  // Filter by search term
  if (searchTerm) {
    guitars = guitars.filter((guitar) =>
      guitar.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const totalPages = Math.ceil(guitars.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const guitarsToShow = guitars.slice(start, end);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setDropdownOpen(false);
    setPage(1); // reset to first page after filtering
  };

  return (
    <>
      <section className="brand-selection">
        <div className="selec">
          <h2>
            Check out the <span className="highlight">Selection</span>
          </h2>
          <div className="brand-selection-controls">
            <div
              className={`custom-dropdown ${dropdownOpen ? "open" : ""}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <div className="filter-select">
                {selectedValue
                  ? selectedValue.charAt(0).toUpperCase() +
                    selectedValue.slice(1)
                  : "Filter by type"}
              </div>

              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleSelect("electric")}>Electric</li>
                  <li onClick={() => handleSelect("acoustic")}>Acoustic</li>
                  <li onClick={() => handleSelect("bass")}>Bass</li>
                </ul>
              )}
            </div>

            <input
              type="text"
              placeholder="Search by name"
              className="search-input"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1); // reset to first page on search
              }}
            />
          </div>
        </div>
      </section>

      <section className="guitar-selection">
        <h2>Available Guitars</h2>
        <div className="guitar-grid">
          {guitarsToShow.map((guitar) => (
            <Link to={`/brand/${brandId}/model/${guitar.id}`} key={guitar.id}>
  <div className="guitar-card">
    <img src={guitar.image} alt={guitar.name} />
    <h3 style={{ textDecoration: 'none', borderBottom: 'none' }}>{guitar.name}</h3>
    <p style={{ textDecoration: 'none', borderBottom: 'none' }}>${guitar.price}</p>
  </div>
</Link>
          ))}
          {guitarsToShow.length === 0 && <p>No guitars found.</p>}
        </div>

        <div className="pagination-container">
          <p className="results-info">
            SHOWING <span>{guitarsToShow.length}</span> RESULTS FROM{" "}
            <span>{guitars.length}</span>
          </p>

          <div className="pagination-buttons">
            <button
              className={`page-btn ${page === 1 ? "disabled" : ""}`}
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              &lt;
            </button>

            {[...Array(totalPages || 1)].map((_, index) => (
              <button
                key={index}
                className={`page-btn ${page === index + 1 ? "active" : ""}`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`page-btn ${
                page === totalPages || totalPages === 0 ? "disabled" : ""
              }`}
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages || totalPages === 0}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

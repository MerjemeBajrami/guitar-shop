// GuitarSpecification.jsx - musicians carousel part
import React, { useState } from "react";
import "../styles/musiciansCarousel.css";


export default function MusiciansCarousel({ musicians }) {
  const [page, setPage] = useState(0);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(musicians.length / itemsPerPage);

  const startIndex = page * itemsPerPage;
  const visibleMusicians = musicians.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="musicians-carousel">
      <div className="musician-list">
        {visibleMusicians.map((player, index) => (
          <div key={index} className="player-card">
            <img src={player.musicianImage} alt={player.name} />
            <p>{player.name}</p>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="carousel-dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`dot ${page === i ? "active" : ""}`}
            onClick={() => setPage(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

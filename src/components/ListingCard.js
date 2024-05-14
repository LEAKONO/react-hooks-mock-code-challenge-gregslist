
import React, { useState } from "react";

function ListingCard({ list, onDelete }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited((prevIsFavorited) => !prevIsFavorited);
  };

  const handleDeleteClick = () => {
    onDelete(list.id);
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${isFavorited ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorited ? "★" : "☆"}
        </button>
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;

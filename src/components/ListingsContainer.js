/*import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchQuery }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data))
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  const filteredListings = listings.filter((list) =>
    list.description && list.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((list) => (
          <ListingCard key={list.id} list={list} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
*/
import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchQuery }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data))
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setListings((prevListings) => prevListings.filter((list) => list.id !== id));
        }
      })
      .catch((error) => console.error("Error deleting listing:", error));
  };

  const filteredListings = listings.filter((list) =>
    list.description && list.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((list) => (
          <ListingCard key={list.id} list={list} onDelete={handleDelete} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;

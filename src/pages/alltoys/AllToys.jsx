import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const toys = useLoaderData();

  const handleSearch = () => {
    // Perform search logic based on the searchTerm
    // Update the filteredToys array with the filtered results
    const filteredToys = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Render the filteredToys
    return filteredToys.map((toy) => (
      <div key={toy._id}>
        <img src={toy.picture_url} alt={toy.name} />
        <h2>{toy.name}</h2>
        <p>{toy.description}</p>
        {/* Render other relevant toy information */}
      </div>
    ));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {handleSearch()}
    </div>
  );
};

export default AllToys;

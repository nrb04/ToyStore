import React from "react";

const TabData = ({ subCategory, toys }) => {
  // Filter toys based on the sub-category
  const filteredToys = toys.filter((toy) => toy.sub_category === subCategory);

  return (
    <div>
      {filteredToys.map((toy) => (
        <div key={toy._id}>
          <img src={toy.picture_url} alt={toy.name} />
          <h2>{toy.name}</h2>
          <p>{toy.description}</p>
          {/* Render other relevant toy information */}
        </div>
      ))}
    </div>
  );
};

export default TabData;

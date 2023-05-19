import React from "react";
import { Link } from "react-router-dom";

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
          <Link
            to={`profile/${toy.seller_email}}`}
            className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
          ></Link>
        </div>
      ))}
    </div>
  );
};

export default TabData;

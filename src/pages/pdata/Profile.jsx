import React from "react";

const Profile = ({ toys, email }) => {
  // Filter toys based on the email
  const filteredToys = toys.filter((toy) => toy.seller_email === email);

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

export default Profile;

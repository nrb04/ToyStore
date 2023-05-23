import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://ass113-nhdred1-gmailcom.vercel.app/data/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleDeleteClick = (toyId) => {
    fetch(`https://ass113-nhdred1-gmailcom.vercel.app/toy/${toyId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // Remove the deleted toy from the toys state
        const updatedToys = toys.filter((toy) => toy._id !== toyId);
        setToys(updatedToys);
      })
      .catch((error) => {
        console.error("Error deleting toy:", error);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        {toys.length === 0 ? (
          <p>You have no data</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <tr key={toy._id}>
                  <td>{toy.seller_name}</td>
                  <td>{toy.seller_email}</td>
                  <td>{toy.sub_category}</td>
                  <td>{toy.price}</td>
                  <td>
                    <Link to={`/profile/${toy._id}`}>View Details</Link>
                    <button onClick={() => handleDeleteClick(toy._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Profile;

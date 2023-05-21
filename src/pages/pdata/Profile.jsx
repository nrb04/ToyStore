import React, { useContext, useEffect, useState } from "react";
import AuthProvider, { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
  const [toys, setToys] = useState([]);
  const [editingToyId, setEditingToyId] = useState(null);
  const [editedToy, setEditedToy] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/data/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleEditClick = (toyId) => {
    setEditingToyId(toyId);
    const selectedToy = toys.find((toy) => toy._id === toyId);
    setEditedToy(selectedToy);
  };

  const handleInputChange = (e) => {
    setEditedToy({ ...editedToy, [e.target.name]: e.target.value });
  };

  const handleUpdateClick = () => {
    fetch(`http://localhost:5000/data/${editingToyId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the toys state with the updated toy data
        const updatedToys = toys.map((toy) => {
          if (toy._id === editingToyId) {
            return { ...toy, ...editedToy };
          }
          return toy;
        });
        setToys(updatedToys);
        setEditingToyId(null);
        setEditedToy({});
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
      });
  };

  return (
    <div>
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
              <td>
                {editingToyId === toy._id ? (
                  <input
                    type="text"
                    name="seller_name"
                    value={editedToy.seller_name || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  toy.seller_name
                )}
              </td>
              <td>{toy.seller_email}</td>
              <td>
                {editingToyId === toy._id ? (
                  <input
                    type="text"
                    name="sub_category"
                    value={editedToy.sub_category || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  toy.sub_category
                )}
              </td>
              <td>
                {editingToyId === toy._id ? (
                  <input
                    type="number"
                    name="price"
                    value={editedToy.price || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  toy.price
                )}
              </td>
              <td>
                {editingToyId === toy._id ? (
                  <button onClick={handleUpdateClick}>Update</button>
                ) : (
                  <button onClick={() => handleEditClick(toy._id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;

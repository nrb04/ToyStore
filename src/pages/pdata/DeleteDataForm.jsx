import React, { useState } from "react";
import axios from "axios";

const DeleteDataForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send DELETE request to delete data associated with the email
      const response = await axios.delete(
        `http://localhost:5000/data/${email}`,
      );

      if (response.status === 200) {
        // Display success message
        setMessage(`Data associated with ${email} has been deleted.`);

        // Clear the form
        setEmail("");
      } else {
        // Display error message
        setMessage("Failed to delete data.");
      }
    } catch (error) {
      // Display error message
      setMessage("Error occurred while deleting data.");
    }
  };

  return (
    <div>
      <h2>Delete Data</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteDataForm;

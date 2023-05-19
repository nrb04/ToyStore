import React, { useState } from "react";

function ToyForm() {
  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create JSON object
    const toyData = {
      picture_url: pictureUrl,
      name,
      seller_name: sellerName,
      seller_email: sellerEmail,
      sub_category: subCategory,
      rating,
      description,
    };

    // Send toyData to the server
    fetch("http://localhost:5000/toy-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data sent to server:", data);
        // Handle server response if needed
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
        // Handle error if needed
      });

    // Reset form fields
    setPictureUrl("");
    setName("");
    setSellerName("");
    setSellerEmail("");
    setSubCategory("");
    setRating(0);
    setDescription("");
  };
  console.log(handleSubmit);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Picture URL:
        <input
          type="text"
          value={pictureUrl}
          onChange={(e) => setPictureUrl(e.target.value)}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Seller Name:
        <input
          type="text"
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Seller Email:
        <input
          type="email"
          value={sellerEmail}
          onChange={(e) => setSellerEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Sub-category:
        <input
          type="text"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ToyForm;

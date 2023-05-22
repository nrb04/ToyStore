import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function ToyForm() {
  const { user } = useContext(AuthContext);

  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState(user?.email || ""); // Use user email if available
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
    fetch("https://ass113-nhdred1-gmailcom.vercel.app/toy-data", {
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
    setSellerEmail(user?.email || ""); // Use user email if available
    setSubCategory("");
    setRating(0);
    setDescription("");
  };

  console.log(handleSubmit);
  return (
    <div>
      <section>
        {" "}
        <div>
          <div className="flex justify-center mt-8 items-center w-screen h-screen bg-white">
            <div className="container mx-auto my-4 px-4 lg:px-20">
              <form onSubmit={handleSubmit}>
                <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                  <div className="flex">
                    <h1 className="font-bold uppercase text-5xl">
                      add your toy
                    </h1>
                  </div>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <input
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Picture Url"
                      value={pictureUrl}
                      onChange={(e) => setPictureUrl(e.target.value)}
                    />
                    <input
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Toy name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="name"
                      name="user"
                      placeholder="Seller name*"
                      value={sellerName}
                      onChange={(e) => setSellerName(e.target.value)}
                    />
                    <input
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={sellerEmail}
                      onChange={(e) => setSellerEmail(e.target.value)}
                    />
                    <input
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="number"
                      placeholder="Rating"
                      value={rating}
                      onChange={(e) => setRating(parseFloat(e.target.value))}
                    />
                    <input
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Subcategory"
                      value={subCategory}
                      onChange={(e) => setSubCategory(e.target.value)}
                    ></input>
                  </div>
                  <div className="my-4">
                    <textarea
                      placeholder="Description*"
                      className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="my-2 w-1/2 lg:w-1/4">
                    <button
                      type="submit"
                      className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                    >
                      Add your toy
                    </button>
                  </div>
                </div>
              </form>
              <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                <div className="flex flex-col text-white">
                  <h1 className="font-bold uppercase text-4xl my-4">
                    Drop in our office
                  </h1>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam tincidunt arcu diam, eu feugiat felis fermentum id.
                    Curabitur vitae nibh viverra, auctor turpis sed, scelerisque
                    ex.
                  </p>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-map-marker-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Main Office</h2>
                      <p className="text-gray-400">
                        5555 Tailwind RD, Pleasant Grove, UT 73533
                      </p>
                    </div>
                  </div>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-phone-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Call Us</h2>
                      <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                      <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                    </div>
                  </div>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <a
                      href="https://www.facebook.com/ENLIGHTENEERING/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                    >
                      <i className="fab fa-facebook-f text-blue-900" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/enlighteneering-inc-"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                    >
                      <i className="fab fa-linkedin-in text-blue-900" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}

export default ToyForm;

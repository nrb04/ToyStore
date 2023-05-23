import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import dtitle from "../../dtitle";

const AllToys = () => {
  dtitle("AlL TOYS");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name"); // Add state for sorting
  const toys = useLoaderData();

  const handleSearch = () => {
    // Perform search logic based on the searchTerm
    // Update the filteredToys array with the filtered results
    let filteredToys = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Sort the filteredToys based on the sortBy value
    if (sortBy === "name") {
      filteredToys = filteredToys.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
      filteredToys = filteredToys.sort((a, b) => a.price - b.price);
    }

    // Render the filteredToys
    return (
      <div>
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-2 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-2 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-2 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Seller Name
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Catagory
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Quantity
                        </th>
                        <th scope="col" className="p-4">
                          <span className="sr-only">View Details</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {filteredToys.map((toy) => (
                        <tr
                          key={toy._id}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            <img
                              src={toy?.picture_url}
                              class="w-32 rounded"
                              alt="Avatar"
                            />
                          </td>

                          <td className="py-4 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            {toy.name.slice(0, 10)}
                          </td>

                          <td className="py-4 text-sm font-medium text-black whitespace-nowrap dark:text-white">
                            {toy.seller_name}
                          </td>
                          <td className="py-4 text-sm font-medium text-black whitespace-nowrap dark:text-white">
                            {toy.sub_category}
                          </td>
                          <td className="py-4 text-sm font-medium text-black whitespace-nowrap dark:text-white">
                            {toy.price}
                          </td>
                          <td className="py-4 text-sm font-medium text-black whitespace-nowrap dark:text-white">
                            {toy.available_quantity}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                            <a
                              href="#"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              view details
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="box-content h-7 w-72 p-4 border-4  ml-16">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="box-content my-5 h-5 w-32 p-4 border-4 ml-16">
        <label htmlFor="sort">Sort By:</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>

      {handleSearch()}
    </div>
  );
};

export default AllToys;

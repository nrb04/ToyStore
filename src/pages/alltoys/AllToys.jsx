import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";

const AllToys = () => {
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
      <Card className="overflow-scroll h-full w-full">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <b>Name</b>
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredToys.map((toy) => (
                <tr key={toy._id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {toy.name.slice(0, 50)}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {toy.description.slice(0, 20)}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${toy.price}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    );
  };

  return (
    <div>
      <div className="2xl:mx-auto 2xl:container  box-content items-center  border-4 lg:px-20 lg:py-0 md:py-12 md:px-6 py-2 px-4 w-96 sm:w-auto">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="2xl:mx-auto 2xl:container box-border  border-4   lg:py-3 md:py-12 md:px-6 py-1 px-4 w-96 sm:w-auto">
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

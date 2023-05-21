import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const toys = useLoaderData();

  const handleSearch = () => {
    // Perform search logic based on the searchTerm
    // Update the filteredToys array with the filtered results
    const filteredToys = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Render the filteredToys
    return (
      <Card className="overflow-scroll h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {handleSearch()}
    </div>
  );
};

export default AllToys;

import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const TabData = ({ subCategory, toys }) => {
  // style

  const filteredToys = toys.filter((toy) => toy.sub_category === subCategory);

  return (
    <div className="container flex flex-col justify-center  mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-between">
      {filteredToys.map((toy) => (
        <div key={toy._id}>
          <Card className="w-auto">
            <CardHeader color="blue-gray" className="relative ">
              <img src={toy.picture_url} alt={toy.name} layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-0">
                {toy.name.slice(0, 20)}
              </Typography>
              <Typography>{toy.description.slice(0, 70)}</Typography>
            </CardBody>
            <CardFooter className="ml-24">
              <Button className="bg-red-700 ">
                <Link to={`profile/${toy.seller_email}}`}></Link>
                view details
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default TabData;

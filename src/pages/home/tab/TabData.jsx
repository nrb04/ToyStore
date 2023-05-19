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
    <div className="flex flex-row">
      {filteredToys.map((toy) => (
        <div key={toy._id}>
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={toy.picture_url} alt={toy.name} layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {toy.name}
              </Typography>
              <Typography>{toy.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0 ">
              <Button>
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

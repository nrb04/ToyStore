import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const TabData = ({ subCategory, toys }) => {
  const filteredToys = toys.filter((toy) => toy.sub_category === subCategory);
  const { user } = useContext(AuthContext);
  return (
    <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-between">
      {filteredToys.map((toy) => (
        <div key={toy._id}>
          <Card className="w-auto">
            <CardHeader color="blue-gray" className="relative">
              <img
                src={toy.picture_url}
                alt={toy.name?.slice(0, 70)}
                layout="fill"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-0">
                {toy.name?.slice(0, 20)}
              </Typography>
              <Typography> $ {toy.price}</Typography>
              <br />
              <Rating style={{ maxWidth: 100 }} value={toy.rating} readOnly />
            </CardBody>
            <CardFooter className="ml-24">
              {user ? (
                <Popover>
                  <PopoverHandler>
                    <Button className="bg-red-700">View Dtails</Button>
                  </PopoverHandler>
                  <PopoverContent>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                      <div className="p-8 rounded shadow-xl sm:p-16">
                        <div className="flex flex-col lg:flex-row">
                          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <img src={toy.picture_url} alt="" srcSet="" />
                            <h2 className="font-sans text-3xl text-center my-5 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                              {toy.name}
                            </h2>
                          </div>
                          <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                              <b> Seller Name: </b>
                              {toy.seller_name || ""}
                              <br />
                              <b>description:</b>
                              {toy.description || ""}
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Link to="/login">
                  <Button className="bg-red-700">View Dtails</Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default TabData;

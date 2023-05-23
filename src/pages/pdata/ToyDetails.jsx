import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Card,
  CardBody,
  Input,
  Button,
  Tabs,
  TabPanel,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
const ToyDetails = () => {
  const toy = useLoaderData();
  const { _id, seller_email, picture_url, name, price, available_quantity } =
    toy;
  console.log(toy);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://ass113-nhdred1-gmailcom.vercel.app/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "thank you for your update",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Photo URL
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                defaultValue={picture_url}
                {...register("picture_url", { required: true })}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                seller name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={seller_email}
                {...register("seller_email", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                {...register("name")}
                defaultValue={name}
                containerProps={{ className: "min-w-[72px]" }}
                {...register("name")}
              />

              <p className="text-gray-600 text-xs italic">full name give plz</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Price
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                defaultValue={price}
                containerProps={{ className: "min-w-[72px]" }}
                {...register("price")}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  {...register("sub_category")}
                >
                  <option value="Avengers">Avengers</option>
                  <option value="Justice League">Justice League</option>
                  <option value="Other">Other</option>
                  <option value="legends"> legends</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Quantity
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                label="Available Quantity"
                defaultValue={available_quantity}
                containerProps={{ className: "min-w-[72px]" }}
                {...register("available_quantity")}
              />
            </div>
          </div>
          <Button size="lg" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ToyDetails;

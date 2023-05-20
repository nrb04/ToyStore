import React from "react";
import TabData from "./TabData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router-dom";

const TabCatagory = () => {
  const toys = useLoaderData();

  // Get unique sub-categories from toys
  const subCategories = [...new Set(toys.map((toy) => toy.sub_category))];

  return (
    <div>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-between ">
        {" "}
        <Tabs>
          <TabList>
            {subCategories.map((subCategory) => (
              <Tab key={subCategory}>{subCategory}</Tab>
            ))}
          </TabList>

          {subCategories.map((subCategory) => (
            <TabPanel key={subCategory}>
              <TabData subCategory={subCategory} toys={toys} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TabCatagory;

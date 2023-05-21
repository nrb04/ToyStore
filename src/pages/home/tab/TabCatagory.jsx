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
      <div>
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
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
    </div>
  );
};

export default TabCatagory;

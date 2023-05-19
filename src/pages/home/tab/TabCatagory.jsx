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
  );
};

export default TabCatagory;

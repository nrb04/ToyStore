import React from "react";
import Banner from "./banner/Banner";
import TabCatagory from "./tab/TabCatagory";
import Xtra1 from "./xtra/Xtra1";
import Xtra2 from "./xtra/Xtra2";
import Ballery from "./xtra/Ballery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <TabCatagory></TabCatagory>
      {/* <Ballery></Ballery> */}
      <Xtra2></Xtra2>
      <Xtra1></Xtra1>
    </div>
  );
};

export default Home;

import React from "react";
import Headr from "../../Components//Headrnetflix/Header";
import NetBanner from '../../NetflixBanner/NetBanner';
import RowList from '../../Components/Rows/RowList/RowList';
import Footernet from "../../Components/Footernetflix/Footernet";

const Home = () => {
  return (
    <>
      <Headr />
      <NetBanner />
      <RowList />
      <Footernet />
    </>
  );
};

export default Home;

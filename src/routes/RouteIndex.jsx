import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Index from "../pages/home/Index";
import Waitlist from "../components/pages/home/waitlist/Waitlist";
import Success from "../components/bommon/data/Success";
import Layout from "../components/layout/Layout";

const RouteIndex = () => {
  return ( 
      <Routes>
        <Route path="/" element={<Layout children={<Index />} />} />
        <Route
          path="/join-waitlist"
          element={<Layout children={<Waitlist />} />}
        />
        <Route path="/success" element={<Success />} />

      </Routes>  
  );
};

export default RouteIndex;

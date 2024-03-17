"use client";

import React from "react";
import Home from "./Home";
import User from "./User";

const DashboardPage = ({ data }: { data: any }) => {
  return <div className="container flex flex-col space-y-8 my-10">
    <User />
    <Home data={data}/>
  </div>
};

export default DashboardPage;

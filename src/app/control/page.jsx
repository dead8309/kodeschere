import React from "react";
import { SetDevices } from "../../actions/setDevices";
import { GetDevices } from "../../actions/getDevices";
import DashboardPage from "./_components/Dashboard";

const Control = async () => {
  const data = await GetDevices();
  console.log(data);
  return <DashboardPage data = {data} />;
};

export default Control;

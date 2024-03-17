import React from "react";
import { SetDevices } from "../../actions/setDevices";
import { GetDevices } from "../../actions/getDevices";
import DashboardPage from "./_components/Dashboard";

const Control = async () => {
  return <DashboardPage data={data} />;
};

export default Control;

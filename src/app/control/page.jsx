import React from "react";
import { SetDevices } from "../../actions/setDevices";
import { GetDevices } from "../../actions/getDevices";

const Control = async () => {
  const data = await GetDevices();
  console.log(data);
  return <div>Control</div>;
};

export default Control;

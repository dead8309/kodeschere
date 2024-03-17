"use server";

export const GetDevices = async () => {
  console.log(process.env.TEAMID);
  const res = await fetch(
    `https://kodessphere-api.vercel.app/devices/${process.env.TEAMID}`
  );
  const data = await res.json();
  return data;
};

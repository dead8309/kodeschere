"use server";

export const SetDevices = async (device, value) => {
  const teamid = process.env.TEAMID;
  const req = {
    teamid,
    device,
    value,
  };

  const res = await fetch(`https://kodessphere-api.vercel.app/devices`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
};

"use server";

export const GetDevices = async () => {
  try {
    console.log(process.env.TEAMID);
    const res = await fetch(
      `https://kodessphere-api.vercel.app/devices/${process.env.TEAMID}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
    
  } catch (error) {
    return {
      fan: 1,
      ac: {state:1,temp:26},
      bulb:1,
      led:"#fff"
    }
  }
};

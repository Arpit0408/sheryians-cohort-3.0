import React, { useEffect } from "react";

const Home = () => {
  let interval = setInterval(() => {
    console.log("interval home rendering");
  }, 1000);

  useEffect(() => {
    console.log("home rendered");

    return () => {
      clearInterval(interval);
      console.log("i m triggered kuki about jaa chuka hai");
    };
  }, []);
  return <div>Home</div>;
};

export default Home;

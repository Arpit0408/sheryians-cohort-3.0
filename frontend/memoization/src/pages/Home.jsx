import React from "react";

const Home = ({ user }) => {
  console.log("Home rendering");

  return <div>Home : {user}</div>;
};

export default React.memo(Home, (prevProps, nextProps) => {
  if (prevProps.user === nextProps.user) {
    return true;
  }
  return false;
});

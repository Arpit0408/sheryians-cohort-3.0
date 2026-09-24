import React from "react";
import Component3 from "./Component3";
import { useContext } from "react";
import { TestContext } from "./context/TestContext";

const Component2 = () => {
  const { data } = useContext(TestContext);
  return (
    <div>
      Component2 
      {data}
      <Component3 />
    </div>
  );
};

export default Component2;

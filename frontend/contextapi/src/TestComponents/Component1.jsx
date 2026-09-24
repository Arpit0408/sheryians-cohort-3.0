import React from "react";
import Component2 from "./Component2";

const Component1 = ({ data }) => {
  return (
    <div>
      Component1 {data}
      <Component2 />
    </div>
  );
};

export default Component1;

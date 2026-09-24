import React, { useState } from "react";
import Component1 from "./TestComponents/Component1";
import TestProvider from "./TestComponents/context/TestContext";
// import Component2 from "./TestComponents/Component2";
// import Component3 from "./TestComponents/Component3";
// import Component4 from "./TestComponents/Component4";

const Test = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Test Component</h2>
      <TestProvider>
        <Component1 />
      </TestProvider>
      {/* <Component2 data={data} />
      <Component3 data={data} />
      <Component4 data={data} /> */}
    </div>
  );
};

export default Test;

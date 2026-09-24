import { createContext, useState } from "react";

export const TestContext = createContext();

const TestProvider = ({ children }) => {
  const [data, setData] = useState("hello user");

  return (
    <TestContext.Provider value={{ data, setData }}>
      {children}
    </TestContext.Provider>
  );
};
export default TestProvider;

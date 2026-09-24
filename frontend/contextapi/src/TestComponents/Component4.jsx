import { useContext } from "react";
import { TestContext } from "./context/TestContext";

const Component4 = () => {
  const { data, setData } = useContext(TestContext);

  return (
    <>
      <div>Component4 {data}</div>
      <button onClick={() => setData("New Data")}>Change Data</button>
    </>
  );
};

export default Component4;

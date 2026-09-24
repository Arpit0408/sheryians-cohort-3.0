import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { MyContext } from "./context/MyContext";
import axios from "axios";

function App() {
  const { count, setCount } = useContext(MyContext);
  const [Data, setData] = useState(null);
  console.log("app rendering");
  const [toggle, setToggle] = useState(false);

  let getdata = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
    console.log(res);
  };

  useEffect(() => {
    console.log("useEffect rendering");
    getdata();
  }, [count]);

  return (
    <>
      <h1>App {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      {toggle ? <Home /> : <About />}
      <Contact />
    </>
  );
}

export default App;

import { useCallback, useState, useMemo } from "react";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  console.log("App rendering");
  const [Count, setCount] = useState(0);
  const [User, setUser] = useState({ name: "raghav", id: 789 });

  const handleUser = () => {
    setUser({ ...User, name: "Ranjeet" });
  };

  let calculation = useMemo(() => {
    console.log("calculation running....");
    let sum = 0;

    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum;
  }, [User]);

  const greetUser = useCallback(() => {
    console.log(User);
  }, [User]);
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col p-2 gap-4">
      <h1>App </h1>
      <h2>The count is : {Count}</h2>

      <h2>My calculation is {calculation}</h2>
      <button onClick={() => setCount(Count + 1)}>Increment</button>
      <Home user={greetUser} />
      <button onClick={handleUser}>Change User</button>
      <button onClick={greetUser}>Greet User</button>
      <About />
    </div>
  );
}

export default App;

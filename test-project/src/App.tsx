import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((state) => state + 1);
  };

  return (
    <>
      <h1>TEST</h1>
      <p>count : {count}</p>
      <button onClick={handleClick}> Click!</button>
    </>
  );
}

export default App;

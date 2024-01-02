import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [sum, setSum] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  async function handleSum(){
    const res = await invoke("sum", { num1: num1, num2: num2 });
    setSum(res);
  }

  return (
    <div className="container">
      <input type="number" onChange={(e) => setNum1(parseInt(e.target.value))}></input>
      <input type="number" onChange={(e) => setNum2(parseInt(e.target.value))}></input>
      <button onClick={handleSum}>+</button>
      <p>Num 1: {num1}</p>
      <p>Num 2: {num2}</p>
      <p>Sum = {sum}</p>
    </div>
  );
}

export default App;

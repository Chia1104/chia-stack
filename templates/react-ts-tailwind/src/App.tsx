import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { cn } from "@/utils";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("App flex flex-col items-center justify-center gap-5")}>
      <div className="flex gap-5">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TS + TailwindCSS</h1>
      <div className={cn("card flex flex-col gap-3")}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Create with '@chia-stack/react-ts-tailwind' template
      </p>
    </div>
  );
}

export default App;

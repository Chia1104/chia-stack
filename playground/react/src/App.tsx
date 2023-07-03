import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { cn, useProxyState, useDeepClone } from "@chiastack/ui-utils";
// import { Button, Input, FadeIn } from "@chiastack/ui";
import Button from "@chiastack/ui/button";
import Input from "@chiastack/ui/input";
import FadeIn from "@chiastack/ui/fade-in";

function App() {
  const [count, setCount] = useState(0);
  const [objCount, setObjCount] = useState<{ count: number }>({ count: 0 }); // [1
  const proxyCount = useProxyState<{ count: number }>({ count: 0 });
  const [sameDeepCount, setSameDeepCount] = useDeepClone<{ count: number }>({
    count: 0,
  });
  const [diffDeepCount, setDiffDeepCount] = useDeepClone<{ count: number }>({
    count: 0,
  });

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
      <Input autoComplete="off" placeholder="Type something..." />
      <h1>Vite + React + TS + TailwindCSS</h1>
      <div className={cn("card flex flex-col gap-3")}>
        <Button
          className="border-info bg-primary-light border"
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button
          className="border-info bg-primary border"
          onClick={() => proxyCount.count++}>
          proxyCount is {proxyCount.count}
        </Button>
        <Button
          className="border-info bg-primary border"
          onClick={() => setSameDeepCount({ count: 0 })}>
          sameDeepCount is {sameDeepCount.count}, this one will not re-render
        </Button>
        <Button
          className="border-info bg-primary border"
          onClick={() => setDiffDeepCount({ count: 1 })}>
          diffDeepCount is {diffDeepCount.count}
        </Button>
        <Button
          className="border-info bg-primary border"
          onClick={() => setObjCount({ count: 0 })}>
          objCount is {objCount.count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <FadeIn>
        <p className="read-the-docs">
          Create with '@chia-stack/react-ts-tailwind' template
        </p>
      </FadeIn>
    </div>
  );
}

export default App;

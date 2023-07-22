import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
  const [objCount, setObjCount] = useState({ count: 0 }); // [1
  const proxyCount = useProxyState({ count: 0 });
  const [sameDeepCount, setSameDeepCount] = useDeepClone({
    count: 0,
  });
  const [diffDeepCount, setDiffDeepCount] = useDeepClone({
    count: 0,
  });
  return _jsxs("div", {
    className: cn("App flex flex-col items-center justify-center gap-5"),
    children: [
      _jsxs("div", {
        className: "flex gap-5",
        children: [
          _jsx("a", {
            href: "https://vitejs.dev",
            target: "_blank",
            rel: "noreferrer",
            children: _jsx("img", {
              src: "/vite.svg",
              className: "logo",
              alt: "Vite logo",
            }),
          }),
          _jsx("a", {
            href: "https://reactjs.org",
            target: "_blank",
            rel: "noreferrer",
            children: _jsx("img", {
              src: reactLogo,
              className: "logo react",
              alt: "React logo",
            }),
          }),
        ],
      }),
      _jsx(Input, { autoComplete: "off", placeholder: "Type something..." }),
      _jsx("h1", { children: "Vite + React + TS + TailwindCSS" }),
      _jsxs("div", {
        className: cn("card flex flex-col gap-3"),
        children: [
          _jsxs(Button, {
            className: "border-info bg-primary-light border",
            onClick: () => setCount((count) => count + 1),
            children: ["count is ", count],
          }),
          _jsxs(Button, {
            className: "border-info bg-primary border",
            onClick: () => proxyCount.count++,
            children: ["proxyCount is ", proxyCount.count],
          }),
          _jsxs(Button, {
            className: "border-info bg-primary border",
            onClick: () => setSameDeepCount({ count: 0 }),
            children: [
              "sameDeepCount is ",
              sameDeepCount.count,
              ", this one will not re-render",
            ],
          }),
          _jsxs(Button, {
            className: "border-info bg-primary border",
            onClick: () => setDiffDeepCount({ count: 1 }),
            children: ["diffDeepCount is ", diffDeepCount.count],
          }),
          _jsxs(Button, {
            className: "border-info bg-primary border",
            onClick: () => setObjCount({ count: 0 }),
            children: ["objCount is ", objCount.count],
          }),
          _jsxs("p", {
            children: [
              "Edit ",
              _jsx("code", { children: "src/App.tsx" }),
              " and save to test HMR",
            ],
          }),
        ],
      }),
      _jsx(FadeIn, {
        children: _jsx("p", {
          className: "read-the-docs",
          children: "Create with '@chia-stack/react-ts-tailwind' template",
        }),
      }),
    ],
  });
}
export default App;

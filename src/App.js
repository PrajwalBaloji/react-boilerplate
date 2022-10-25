import React, { useState } from "react";
import { hot } from "react-hot-loader";

const Warning = React.lazy(() => import("./Warning"));

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello World !!! {count}</h1>;
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count > 0 ? s - 1 : 0)}>-</button>
      {count > 10 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}
    </>
  );
}

export default hot(module)(App);

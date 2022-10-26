import React, { useState } from "react";
import { hot } from "react-hot-loader";

const Warning = React.lazy(() => import("./Warning"));

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello World !!! {count}</h1>;
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <img
        alt="company logo"
        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
      />
      {count > 10 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}
    </>
  );
}

export default hot(module)(App);

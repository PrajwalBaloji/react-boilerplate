/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("Renders without error", () => {
    render(<App />);
  });
  // it("fails", () => {
  //   expect(true).toBe(false);
  // });
});

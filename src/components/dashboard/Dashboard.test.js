import { render } from "@testing-library/react";
import * as React from "react";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it("will match snapshot", () => {
    var component = render(<Dashboard />);
    expect(component).toMatchSnapshot();
  });
});

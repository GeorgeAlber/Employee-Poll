import { render } from "@testing-library/react";
import * as React from "react";
import Leaderboard from "./Leaderboard";

describe("Leaderboard", () => {
  it("will match snapshot", () => {
    var component = render(<Leaderboard />);
    expect(component).toMatchSnapshot();
  });
});

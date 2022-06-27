import { render } from "@testing-library/react";
import * as React from "react";
import reducer from "../../redux/reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Leaderboard from "./Leaderboard";

const initialState = [
  {
    id: "sarahedo",
    answerdPolls: 4,
    askedPolls: 2,
    img: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    name: "Sarah Edo",
  },
  {
    id: "johndoe",
    answerdPolls: 3,
    askedPolls: 2,
    img: "https://tylermcginnis.com/would-you-rather/dan.jpg",
    name: "John Doe",
  },
  {
    id: "tylermcginnis",
    answerdPolls: 2,
    askedPolls: 2,
    img: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
    name: "Tyler McGinnis",
  },
];

const store = createStore(reducer, initialState);

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("Leaderboard", () => {
  it("will match snapshot", () => {
    var component = render(<Leaderboard />, { wrapper: Wrapper });
    expect(component).toMatchSnapshot();
  });
});

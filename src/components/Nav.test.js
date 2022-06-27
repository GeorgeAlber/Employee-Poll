import { render } from "@testing-library/react";
import * as React from "react";
import reducer from "../redux/reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Nav from "./Nav";
import { BrowserRouter as Router } from "react-router-dom";

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

describe("Nav", () => {
  it("will have Home Link", () => {
    var component = render(
      <Router>
        <Nav />
      </Router>,
      { wrapper: Wrapper }
    );
    var links = component.getAllByText("Home");
    expect(links.length).toEqual(1);
  });

  it("will New Leaderboard Link", () => {
    var component = render(
      <Router>
        <Nav />
      </Router>,
      { wrapper: Wrapper }
    );
    var links = component.getAllByText("Leaderboard");
    expect(links.length).toEqual(1);
  });

  it("will have New Link", () => {
    var component = render(
      <Router>
        <Nav />
      </Router>,
      { wrapper: Wrapper }
    );
    var links = component.getAllByText("New");
    expect(links.length).toEqual(1);
  });

  it("will have Logout Link", () => {
    var component = render(
      <Router>
        <Nav />
      </Router>,
      { wrapper: Wrapper }
    );
    var links = component.getAllByText("Logout");
    expect(links.length).toEqual(1);
  });
});

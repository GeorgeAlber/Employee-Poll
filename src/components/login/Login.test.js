import { render } from "@testing-library/react";
import * as React from "react";
import Login from "./Login";
import reducer from "../../redux/reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  users: {
    johndoe: {
      id: "johndoe",
      name: "John Doe",
      avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
        vthrdm985a262al8qx3do: "optionTwo",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
      },
      questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    },
  },
};

const store = createStore(reducer, initialState);

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("Login", () => {
  it("will have expected fields", () => {
    var component = render(<Login />, { wrapper: Wrapper });
    var labelUsername = component.getAllByText(/name/);
    expect(labelUsername.length).toEqual(1);
  });
});

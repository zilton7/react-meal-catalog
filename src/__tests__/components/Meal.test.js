import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Meal from "../../components/Meal";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";

afterEach(cleanup);
it("displays heading", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Meal
          id="005784"
          name="Test"
          image="https://via.placeholder.com/150"
          key="005784"
        />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Test")).toBeTruthy();
});

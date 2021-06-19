import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import MealDetail from "../../components/MealDetail";
import store from "../../store/index";

afterEach(cleanup);

it("Should take a snapshot", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MealDetail />
    </Provider>
  );
  expect(
    asFragment(
      <Provider store={store}>
        <MealDetail />
      </Provider>
    )
  ).toMatchSnapshot();
});

it("Displays close button", () => {
  render(
    <Provider store={store}>
      <MealDetail />
    </Provider>
  );
  const closeButton = screen.getByText(/X/i);
  expect(closeButton).toBeInTheDocument();
});

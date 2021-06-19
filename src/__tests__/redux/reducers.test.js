import { cleanup } from "@testing-library/react";
import store from "../../store";

afterEach(cleanup);

it("should return initial state", () => {
  expect(store.getState().detail.meal.meals).toBeInstanceOf(Object);
});

it("should return initial state", () => {
  expect(store.getState().meals).toBeInstanceOf(Object);
});

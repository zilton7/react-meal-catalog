import detailReducer from "../../reducers/detailReducer";

describe("Detail Reducer", () => {
  it("Checks if default state is returned", () => {
    const state = detailReducer(undefined, { type: "" });
    expect(state).toStrictEqual({ meal: { meals: [{}] } });
  });

  it("Checks if reducer's default action returns provided state", () => {
    const state = detailReducer({ meal: { meals: [{}] } }, { type: "" });
    expect(state).toStrictEqual({ meal: { meals: [{}] } });
  });
});

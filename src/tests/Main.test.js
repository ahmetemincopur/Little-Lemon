import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns the correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes returns the same state when action type is UPDATE_TIMES", () => {
  const initialState = initializeTimes();
  const action = { type: "UPDATE_TIMES", payload: "2023-05-28" };
  const updatedState = updateTimes(initialState, action);
  expect(updatedState).toEqual(initialState);
});

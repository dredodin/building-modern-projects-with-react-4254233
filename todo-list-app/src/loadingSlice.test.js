import { loadingSliceDef } from "./loadingSlice.js";

function testLoadingSlice() {
  const fakeState = { value: { completed: false } };
  loadingSliceDef.reducers.loadingStarted(fakeState);
  if (fakeState.value.completed) console.log("It works");
  else throw new Error("It failed");
}

testLoadingSlice();

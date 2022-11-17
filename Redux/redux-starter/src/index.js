import store from "./store";
import { bugAdded, bugResolved } from "./action";
import * as actions from "./actionType";

// const unscribe = store.subscribe(() => {
//   console.log("change");
// });

store.dispatch(bugAdded("bug1"));

console.log(store.getState());

// unscribe();
// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });
store.dispatch(bugResolved(1));

console.log(store.getState());

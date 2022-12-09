// import store from "./store";
// import * as actions from "./actionType";

// import { bugAdded, bugResolved } from "./action";

// const unscribe = store.subscribe(() => {
//   console.log("store changed", store.getState());
// });

// store.dispatch(bugAdded("bug1"));
// unscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

// store.dispatch(bugResolved(1));

// console.log(store.getState());

import store from "./CustomStore";
import * as actions from "./action";

store.subscribe(() => {});

store.dispatch(actions.bugAdded("bug1"));

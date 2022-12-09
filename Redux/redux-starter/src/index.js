import store from "./store";
import * as actions from "./action";

store.subscribe(() => {
  console.log("store changed");
});

store.dispatch(actions.bugAdded("bug 1"));
store.dispatch(actions.bugAdded("bug 1"));
store.dispatch(actions.bugAdded("bug 1"));
store.dispatch(actions.bugAdded("bug 1"));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());

// custom redux

// import store from "./CustomStore";
// import * as actions from "./action";

// store.subscribe(() => {});

// store.dispatch(actions.bugAdded("bug1"));

import * as actions from "./actionType";

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description,
    },
  };
}

export const bugResolved = (id) => ({
  type: actions.BUG_RESLOVED,
  payload: { id },
});

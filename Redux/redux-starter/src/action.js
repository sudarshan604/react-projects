import * as actions from "./actionType";

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    patload: {
      description,
    },
  };
}

export const bugResolved = (id) => ({
  type: actions.BUG_RESLOVED,
  payload: { id },
});

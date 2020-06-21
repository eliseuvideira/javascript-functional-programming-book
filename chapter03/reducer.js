const initialState = {
  count: 0,
};

const doAction = ({ state, action }) => {
  const newState = {};
  switch (action.type) {
    case "add":
      newState.count = state.count + 1;
      action.print(newState);
      return newState;
    case "subtract":
      newState.count = state.count - 1;
      action.print(newState);
      return newState;
    default:
      return state;
  }
};

const dispatch = {
  add: (state, action) => {
    const newState = {};
    newState.count = state.count + 1;
    action.print(newState);
    return newState;
  },
  subtract: (state, action) => {
    const newState = {};
    newState.count = state.count - 1;
    action.print(newState);
    return newState;
  },
};

const doAction2 = ({ state, action }) => {
  return dispatch[action.type] ? dispatch[action.type](state, action) : state;
};

let state = initialState;

const action = { print: console.log, type: "add" };

state = doAction({ state, action });
state = doAction2({ state, action });

action.type = "subtract";

state = doAction({ state, action });
state = doAction2({ state, action });

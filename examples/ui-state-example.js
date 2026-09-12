// A tiny immutable reducer for generic screen and notice state.
// It demonstrates UI state updates only and has no account, room, ranking,
// networking, authorization, or server behavior.

const initialState = Object.freeze({
  screen: "home",
  notice: "",
  busy: false,
});

function reduceUi(state, action) {
  switch (action.type) {
    case "navigate":
      return { ...state, screen: action.screen, notice: "" };
    case "set-notice":
      return { ...state, notice: action.message };
    case "set-busy":
      return { ...state, busy: Boolean(action.value) };
    default:
      return state;
  }
}

let state = initialState;
state = reduceUi(state, { type: "navigate", screen: "settings" });
state = reduceUi(state, { type: "set-busy", value: true });
state = reduceUi(state, { type: "set-notice", message: "Saving preferences…" });
console.log(state);


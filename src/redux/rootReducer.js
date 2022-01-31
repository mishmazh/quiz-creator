const initialState = {
  menu: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "MENU_TOGGLE":
      return { menu: !state.menu };
    case "MENU_CLOSE":
      return { menu: false };
    default:
      return state;
  }
}

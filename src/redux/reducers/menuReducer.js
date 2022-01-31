import { MENU_CLOSE, MENU_TOGGLE } from "../actions/actionTypes";

const initialState = {
  menu: false,
};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_TOGGLE:
      return { menu: !state.menu };
    case MENU_CLOSE:
      return { menu: false };
    default:
      return state;
  }
}

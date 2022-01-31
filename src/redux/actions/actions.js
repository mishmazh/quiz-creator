import { MENU_CLOSE, MENU_TOGGLE } from "./actionTypes";

export function menuToggle() {
  return {
    type: MENU_TOGGLE,
  };
}
export function menuClose() {
  return {
    type: MENU_CLOSE,
  };
}

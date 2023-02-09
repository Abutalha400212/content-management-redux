import { TOGGLE_ROLE } from "../actionTypes/actionTypes";

export const roleAction = (role) => {
  return {
    type: TOGGLE_ROLE,
    payload: role,
  };
};

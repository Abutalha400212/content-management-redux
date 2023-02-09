import { TOGGLE_ROLE } from "../actionTypes/actionTypes";

const initialState = {
  role: false,
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ROLE:
      return {
        ...state,
        role: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;

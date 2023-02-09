import {
  ADD_CONTENT,
  DELETE_CONTENT,
  LOAD_CONTENT,
  UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  contents: [],
};
const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };
    case LOAD_CONTENT:
      return {
        ...state,
        contents: action.payload,
      };
    case DELETE_CONTENT:
      return {
        ...state,
        contents: state.contents.filter(
          (content) => content._id !== action.payload
        ),
      };
    case UPDATE_CONTENT:
      const newcontent = state.contents.find(
        (content) => content._id === action.payload._id
      );
      return {
        newcontent,
      };

    default:
      return state;
  }
};
export default contentReducer;

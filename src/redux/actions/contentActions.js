import {
  ADD_CONTENT,
  DELETE_CONTENT,
  LOAD_CONTENT,
  UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

export const addContent = (data) => {
  return {
    type: ADD_CONTENT,
    payload: data,
  };
};
export const loadContent = (data) => {
  return {
    type: LOAD_CONTENT,
    payload: data,
  };
};
export const deleteContent = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};
export const updateContent = (data) => {
  return {
    type: UPDATE_CONTENT,
    payload: data,
  };
};

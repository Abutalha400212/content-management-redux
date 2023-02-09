import React from "react";
import { deleteContent } from "../actions/contentActions";

export default function deleteContentData(id) {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/content/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(deleteContent(id));
    }
  };
}

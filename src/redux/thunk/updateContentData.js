import { updateContent } from "../actions/contentActions";

const updateContentData = (content) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/content/${content._id}`, {
      method: "PUT",
      body: content,
    });
    const data = await res.json();
    console.log(data);
    if (data.matchedCount > 0) {
      dispatch(updateContent(content));
    }
  };
};

export default updateContentData;

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import updateContentData from "../redux/thunk/updateContentData";
import Toast from "react-hot-toast";
export default function UpdateContentModal({ updateContent }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const handleUpdateContent = (data) => {
    dispatch(updateContentData({ ...data, _id: updateContent._id }));
    reset();
    Toast.success("Updated Your Post");
    navigate("/");
  };
  return (
    <>
      <input
        type="checkbox"
        id="update-content-modal"
        className="modal-toggle"
      />
      <form onSubmit={handleSubmit(handleUpdateContent)} className="modal">
        <div className="modal-box relative ">
          <label
            htmlFor="update-content-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <input
            required
            defaultValue={updateContent?.title}
            {...register("title")}
            type="text"
            className="input w-full "
          />
          <textarea
            required
            defaultValue={updateContent?.content}
            {...register("content")}
            className="textarea textarea-bordered w-full my-2"></textarea>
          <div className="modal-action">
            <button type="submit">Update</button>
          </div>
        </div>
      </form>
    </>
  );
}

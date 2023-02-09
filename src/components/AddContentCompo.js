import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Toast from "react-hot-toast";
import addContentData from "../redux/thunk/addContent";
import { useNavigate } from "react-router-dom";
export default function AddContentCompo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleAddContent = (data) => {
    dispatch(addContentData(data));
    reset();
    Toast.success("Added Your Post");
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(handleAddContent)} className="card ">
      <div className="card-body">
        <h1 className="text-xl font-bold text-center">Publish Your Mention</h1>
        <div className="form-control">
          <label htmlFor="heading" className="label">
            <span className="label-text font-semibold">
              Write heading your content
            </span>
          </label>
          <input
            required
            {...register("title")}
            type="text"
            placeholder="Heading....."
            className="input w-full "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Write Your Mention</span>
          </label>
          <textarea
            required
            {...register("content")}
            className="textarea textarea-bordered md:h-40 h-24 border-0 focus:ring-0 outline-none"
            placeholder="Start writing your mention........"></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Publish
        </button>
      </div>
    </form>
  );
}

import React from "react";
import { useDispatch } from "react-redux";
import { deleteContent } from "../redux/actions/contentActions";
import deleteContentData from "../redux/thunk/deleteContentData";
import UpdateContentModal from "./UpdateContentModal";

export default function ContentCard({ data, setUpdateItem }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2021/10/20101154/abstract_money_cybercrime.jpg"
            alt="cyber"
          />
        </figure>
        <div className="card-body m-0">
          <h2 className="card-title">{data?.title}</h2>
          <p>
            {data?.content?.length > 100
              ? `${data?.content?.slice(0, 100)}`
              : data?.content}
            <span className="link link-hover px-1 text-cyan-500">See More</span>
          </p>
          <div className="divider m-0"></div>
          <div className="card-actions flex justify-between items-center font-bold">
            <button onClick={() => dispatch(deleteContentData(data._id))}>
              Delete Post
            </button>
            <label
              onClick={() => setUpdateItem(data)}
              htmlFor="update-content-modal"
              className="cursor-pointer">
              Edit
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

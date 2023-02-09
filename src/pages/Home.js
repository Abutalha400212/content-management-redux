import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentCard from "../components/ContentCard";
import UpdateContentModal from "../components/UpdateContentModal";
import loadContentData from "../redux/thunk/fetchContents";

export default function Home() {
  const [updateItem, setUpdateItem] = useState({});
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.content);
  console.log(contents);
  useEffect(() => {
    dispatch(loadContentData());
  }, [dispatch]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
        {contents?.map((content) => (
          <ContentCard
            key={content._id}
            data={content}
            setUpdateItem={setUpdateItem}
          />
        ))}
      </div>
      <UpdateContentModal updateContent={updateItem} />
    </>
  );
}

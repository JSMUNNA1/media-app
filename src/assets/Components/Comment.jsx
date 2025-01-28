/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_REQUEST } from "../../Redux/Action";

import Inputfield from "./Inputfield";
import CommentCard from "./CommentCard";

export default function Comment({ post = {} }) {
  const [formData, setFormData] = useState({ comment: "" });

  const { posts = [] } = useSelector((state) => state.posts); // Ensure posts is an array
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { comment } = formData;

    if (!comment.trim()) {
      return;
    }

    handleAddComment(comment.trim());
    setFormData({ comment: "" });
  };

  const handleAddComment = (newComment) => {
    const updatedPosts = posts.map((val) =>
      val.id === post.id
        ? { ...val, comment: [...(val.comment || []), newComment] }
        : val
    );

    dispatch({ type: FETCH_REQUEST, payload: updatedPosts });
  };

  const handleDeleteComment = (index) => {
    const updatedPosts = posts.map((val) =>
      val.id === post.id
        ? { ...val, comment: val.comment.filter((_, i) => i !== index) }
        : val
    );

    dispatch({ type: FETCH_REQUEST, payload: updatedPosts });
  };

  return (
    <div className="bg-slate-100 mx-auto w-full min-h-[200px]">
      <div>
        <h2 className="text-2xl font-bold text-center">Comments</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
          <div className="flex items-center  lg:flex-row  flex-col justify-between ">
            <div className="w-[90%]">
              <Inputfield
                className="w-[90%]"
                type="text"
                label="comment"
                name="comment"
                maxlength={"200"}
                value={formData.comment}
                onChange={handleChange}
              />
            </div>
            <div className="mb-7  ">
              <button
                type="submit"
                className="bg-blue-950 lg:w-[120px] md:mr-10 md:w-[320px] w-[200px] h-[40px] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Add
              </button>
            </div>
          </div>
        </form>

        {Array.isArray(post?.comment) && post.comment.length > 0 ? (
          post.comment.map((comment, index) => (
            <CommentCard
              key={index}
              comment={comment}
              handleDeleteComment={handleDeleteComment}
              index={index}
            />
          ))
        ) : (
          <p>No comments yet...</p>
        )}
      </div>
    </div>
  );
}

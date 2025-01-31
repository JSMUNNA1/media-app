/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, FETCH_REQUEST } from "../../Redux/Action";

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
    post.comments.unshift({
      text: newComment,
      like: false,
      dislike: false,
      reply: [],
    });
    dispatch(addComment(post));
  };

  const handleDeleteComment = (index) => {
    const updatedPosts = posts.map((val) =>
      val.id === post.id
        ? { ...val, comments: val.comments.filter((_, i) => i !== index) }
        : val
    );

    dispatch({ type: FETCH_REQUEST, payload: updatedPosts });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Comments
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col lg:flex-row items-center   gap-4">
          <Inputfield
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500"
            type="text"
            label="Comment"
            name="comment"
            maxLength={200}
            value={formData.comment}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-800 text-white  lg:mb-5 py-2 px-6 rounded-lg hover:bg-blue-950 transition"
          >
            Add
          </button>
        </div>
      </form>
      <div className="mt-6 space-y-4">
        {Array.isArray(post?.comments) && post.comments.length > 0 ? (
          post.comments.map((comment, index) => (
            <CommentCard
              key={index}
              comment={comment}
              handleDeleteComment={handleDeleteComment}
              index={index}
              post={post}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No comments yet...</p>
        )}
      </div>
    </div>
  );
}

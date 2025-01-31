/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_REQUEST } from "../../Redux/Action";
import profile from "../../assets/Header/profile.png";
import mainImg from "../../assets/Trading collection/dog.png";
import LikeButton from "../../assets/Components/LikeButton";
import UndoLike from "../../assets/Components/UndoLike";
import DisLike from "../../assets/Components/DisLike";
import UndoDisLike from "../../assets/Components/UndoDisLike";
import Comment from "../../assets/Components/Comment";
import commentIcon from "../../assets/comment.svg";
import MenuKebab from "../../assets/Components/MenuKebab";
import { Tooltip } from "react-tooltip";

export default function Card({ post }) {
  const [showComments, setShowComments] = useState(false);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const toggleComments = () => setShowComments((prev) => !prev);

  const handleLike = () => {
    const updatedPosts = posts.map((p) =>
      p.id === post.id ? { ...p, like: !p.like, unlike: false } : p
    );
    dispatch({ type: FETCH_REQUEST, payload: updatedPosts });
  };

  const handleUnlike = () => {
    const updatedPosts = posts.map((p) =>
      p.id === post.id ? { ...p, unlike: !p.unlike, like: false } : p
    );
    dispatch({ type: FETCH_REQUEST, payload: updatedPosts });
  };

  return (
    <div className="border rounded-xl shadow-lg p-5 bg-white max-w-lg mx-auto mt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={profile} alt="User" className="w-10 h-10 rounded-full" />
          <h3 className="font-semibold text-gray-700">User ID: {post.id}</h3>
        </div>
        <MenuKebab post={post} />
      </div>

      {/* Content */}
      <h5 className="text-lg font-bold mb-2">{post.title}</h5>
      <p className="text-gray-600 mb-3">{post.body}</p>
      <div className="w-full rounded-lg overflow-hidden">
        <img
          src={post.image ? post.image : mainImg}
          alt="Post"
          className="w-full object-cover "
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-4">
        <button onClick={handleLike} className="flex items-center space-x-2">
          {post.like ? <LikeButton /> : <UndoLike />}
        </button>
        <button onClick={handleUnlike} className="flex items-center space-x-2">
          {post.unlike ? <DisLike /> : <UndoDisLike />}
        </button>
        <button
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
          onClick={toggleComments}
        >
          <img id="comment-123" src={commentIcon} alt="" className="" />
          <Tooltip anchorSelect="#comment-123" place="top">
            comments
          </Tooltip>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && <Comment post={post} />}
    </div>
  );
}

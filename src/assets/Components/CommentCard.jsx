/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import profile from "../../assets/Header/profile.png";
import LikeButton from "./LikeButton";
import UndoLike from "./UndoLike";
import DisLike from "./DisLike";
import UndoDisLike from "./UndoDisLike";
import Reply from "./Reply";
import Inputfield from "./Inputfield";
import { useState } from "react";
import { addComment } from "../../Redux/Action";

export default function CommentCard({
  comment,
  handleDeleteComment,
  index,
  post,
}) {
  const [isShowReply, setIsShowReply] = useState(false);
  const [formData, setFormData] = useState({ reply: "" });
  const [showLikes, setShowLikes] = useState(false);
  const [showDisLikes, setShowDisLikes] = useState(false);

  // const { posts = [] } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { reply } = formData;

    if (!reply.trim()) {
      return;
    }

    handleAddReply(reply.trim());
    setFormData({ reply: "" });
  };

  const handleAddReply = (newReplay) => {
    const replypost = post.comments.map((comment, i) => {
      if (i === index) {
        return { ...comment, reply: [...comment.reply, newReplay] };
      } else {
        return comment;
      }
    });
    const replyPost = { ...post, comments: replypost };
    dispatch(addComment(replyPost));
    // dispatch(addComment(post));
    // dispatch(addComment(post.id, updatedComment));
  };

  const handleDeleteReply = (replyIndex) => {
    const updatedComments = post.comments.map((comment, i) => {
      if (i === index) {
        // Filter out the reply at replyIndex
        const updatedReplies = comment.reply.filter((_, j) => j !== replyIndex);
        return { ...comment, reply: updatedReplies };
      }
      return comment;
    });

    const updatedPost = { ...post, comments: updatedComments };
    dispatch(addComment(updatedPost));
  };
  const handleLikeComment = () => {
    console.log(post, "post Data");

    //const likedcomment = { ...comment, like: !comment.like, dislike: false };
    const likepost = post.comments.map((comment, i) => {
      if (i === index) {
        return { ...comment, like: !comment.like, dislike: false };
      } else {
        return comment;
      }
    });
    const likedPost = { ...post, comments: likepost };
    dispatch(addComment(likedPost));
    setShowLikes((e) => !e);
  };
  const handleDislikeComment = () => {
    const unlikepost = post.comments.map((comment, i) => {
      if (i === index) {
        return { ...comment, like: false, dislike: !comment.dislike };
      } else {
        return comment;
      }
    });
    const dislikedPost = { ...post, comments: unlikepost };
    dispatch(addComment(dislikedPost));
    setShowDisLikes((e) => !e);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] border-2 bg-white shadow-lg rounded-lg p-4">
        {/* Profile Section */}
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-[40px] h-[40px]">
            <img
              src={profile}
              className="w-full h-full rounded-full object-cover"
              alt="User Profile"
            />
          </div>
          <h5 className="font-semibold text-gray-800 text-lg">User</h5>
        </div>

        {/* Comment Content */}
        <div className="mb-3">
          <p className="text-gray-700 text-base leading-relaxed break-words">
            {comment.text}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-2">
          {/* Like & Dislike Buttons */}
          <div className="flex space-x-3">
            <div
              className="cursor-pointer transform transition-transform hover:scale-110"
              onClick={handleLikeComment}
            >
              {comment.like ? <LikeButton /> : <UndoLike />}
            </div>
            <div
              className="cursor-pointer transform transition-transform hover:scale-110"
              onClick={handleDislikeComment}
            >
              {comment.dislike ? <DisLike /> : <UndoDisLike />}
            </div>
          </div>

          {/* Reply & Delete Buttons */}
          <div className="flex space-x-3">
            <button
              className="text-blue-600 font-semibold hover:text-blue-800 transition"
              onClick={() => setIsShowReply((prev) => !prev)}
            >
              Reply
            </button>
            <button
              onClick={() => handleDeleteComment(index)}
              className="bg-red-100 text-red-500 px-4 py-1 rounded-lg hover:bg-red-200 transition"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Reply Input Section */}
        {isShowReply && (
          <div className="mt-4 border-t pt-4">
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
              Reply
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <Inputfield
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                type="text"
                label="reply"
                name="reply"
                maxLength={"50"}
                value={formData.reply}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
              >
                Add Reply
              </button>
            </form>

            {/* Replies List */}
            {comment.reply.length > 0 ? (
              comment.reply.map((val, index) => (
                <Reply
                  key={index}
                  val={val}
                  index={index}
                  handleDeleteReply={handleDeleteReply}
                />
              ))
            ) : (
              <p className="text-gray-500 text-sm mt-2">No replies yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

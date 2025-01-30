/* eslint-disable react/prop-types */
import { useState } from "react";
import LikeButton from "../../assets/Components/LikeButton";
import profile from "../../assets/Header/profile.png";
import mainImg from "../../assets/Trading collection/dog.png";
import Comment from "../../assets/Components/Comment";
import commentIcon from "../../assets/comment.svg";
import DisLike from "../../assets/Components/DisLike";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_REQUEST } from "../../Redux/Action";
import UndoLike from "../../assets/Components/UndoLike";
import UndoDisLike from "../../assets/Components/UndoDisLike";
import MenuKebab from "../../assets/Components/MenuKebab";

export default function Card({ post }) {
  const [showComments, setShowComments] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const [showDisLikes, setShowDisLikes] = useState(false);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  // handle kebab-menu

  // Like Functinality handle
  const handleLike = () => {
    setShowLikes((e) => !e);

    const likedPost = posts.map((val) => {
      if (!showLikes) {
        setShowDisLikes(false);
        return val.id === post.id
          ? { ...val, like: !val.like, unlike: false }
          : val;
      }
      return val.id === post.id ? { ...val, like: !val.like } : val;
    });
    dispatch({ type: FETCH_REQUEST, payload: likedPost });
  };
  //  Unlike Functionality
  const handleUnlike = () => {
    setShowDisLikes((e) => !e);
    const unlikedPost = posts.map((val) => {
      if (!showDisLikes) {
        setShowLikes(false);
        return val.id === post.id
          ? { ...val, unlike: !val.unlike, like: false }
          : val;
      }
      return val.id === post.id ? { ...val, unlike: !val.unlike } : val;
    });

    dispatch({ type: FETCH_REQUEST, payload: unlikedPost });
  };

  return (
    <div className="mt-2 container mx-auto border-2 rounded-md lg:w-[500px] md:w-[500px] ">
      <div className="flex justify-center flex-col w-full">
        {/* User and Delete */}
        <div className=" w-[95%] flex justify-between ">
          <div className="User ml-2 mt-3 items-center flex w-[150px] justify-between">
            <div className="w-[40px] h-auto">
              {/* onLoad={handleLoadImage} */}
              <img src={profile} className="w-100 h-auto" />
            </div>
            <div>
              <h3 className="text-lg">{`UserID: ${post.id}`}</h3>
            </div>
          </div>

          {/* KebabMenu */}
          <div>
            <MenuKebab post={post} />
          </div>
        </div>
        {/* Title */}
        <div className="title mt-4 ml-5 w-[75%] break-words font-semibold">
          <h5>{post.title}</h5>
        </div>
        {/* Description */}
        <div className="description flex justify-center ml-5  mt-3 mb-3">
          <p className="w-[75%] break-words"> {post.body}</p>
        </div>
        {/* Content Image */}
        <div className="contentImg  self-center lg:w-[350px] h-auto">
          <img
            src={post.image ? post.image : mainImg}
            className="w-100 h-auto"
            alt=""
          />
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-between px-5 mt-3">
          {/* Like Button */}
          <div>
            <div onClick={handleLike}>
              {post.like ? <LikeButton /> : <UndoLike></UndoLike>}
            </div>
          </div>
          <div onClick={handleUnlike}>
            {post.unlike ? <DisLike></DisLike> : <UndoDisLike></UndoDisLike>}
          </div>
          <button
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
            onClick={toggleComments}
          >
            {/* DisLike Button */}

            {/* Comment Icon */}
            <img src={commentIcon} alt="" />
            <span>Comments</span>
          </button>
        </div>
        {/* Comments Section s */}
        {showComments && <Comment post={post} />}
      </div>
    </div>
  );
}

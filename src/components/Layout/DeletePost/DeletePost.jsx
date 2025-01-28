/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import deleteIcon from "../../../assets/deleteIcon.svg";
import { deletePost } from "../../../Redux/Action";
export default function DeletePost({ post }) {
  const { id } = post;
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log(id, "Delete");
    dispatch(deletePost(id));
  };

  return (
    <div>
      <img
        src={deleteIcon}
        onClick={handleDelete}
        className="cursor-pointer  w-[100%] h-auto"
        alt=""
      />
    </div>
  );
}

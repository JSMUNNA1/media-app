/* eslint-disable react/prop-types */
import profile from "../../assets/Header/profile.png";

export default function CommentCard({ comment, handleDeleteComment, index }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] border-2">
        {/* Profile */}
        <div className="flex w-[17%] justify-between items-center">
          <div className="w-[30px] h-[30px]">
            <img src={profile} className="w-full h-auto" alt="User Profile" />
          </div>
          <div>
            <h5 className="font-semibold">User</h5>
          </div>
        </div>
        {/* Body */}
        <div className="mt-2 ml-3">
          <div className="flex justify-between items-center">
            <p className="w-[70%] break-words">{comment}</p>
            {/* Delete Button */}
            <button
              onClick={() => handleDeleteComment(index)}
              className="bg-transparent border-red-200 border-2 text-red-400 w-[80px] h-[40px] py-2 px-4 rounded-lg hover:text-red-800 transition bg-orange-50"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

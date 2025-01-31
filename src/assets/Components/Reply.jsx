/* eslint-disable react/prop-types */
import profile from "../../assets/Header/profile.png";

export default function Reply({ val, handleDeleteReply, index }) {
  return (
    <div
      className="flex items-center justify-center w-full my
    -2"
    >
      <div className="w-[90%] border-2 bg-white shadow-md rounded-lg p-3">
        {/* Profile */}
        <div className="flex items-center space-x-3 mb-2">
          <img
            src={profile}
            className="w-8 h-8 rounded-full"
            alt="User Profile"
          />
          <h5 className="font-semibold text-gray-800">User</h5>
        </div>

        {/* Reply Body */}
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-sm w-[75%] break-words">{val}</p>

          {/* Delete Button */}
          <button
            onClick={() => handleDeleteReply(index)}
            className="bg-red-50 text-red-500 px-3 py-1 text-sm rounded-lg border border-red-300 hover:bg-red-100 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Inputfield from "../../../assets/Components/Inputfield";
import { useLocation } from "react-router-dom";
import { updatePost } from "../../../Redux/Action";
import { useDispatch } from "react-redux";

export default function UpdatePost() {
  const dispatch = useDispatch();
  const location = useLocation();
  const post = location.state;

  const [formData, setFormData] = useState({
    title: post.title,
    body: post.body,
    image: post.image ? post.image : "",
  });

  const [error, setError] = useState({
    title: "",
    body: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" })); // Clear errors on change
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    // Validate file type
    if (file && file.type !== "image/jpeg") {
      setError((prev) => ({ ...prev, image: "Only JPG images are allowed." }));
      return;
    }

    setFormData((prev) => ({ ...prev, image: file }));
    setError((prev) => ({ ...prev, image: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, body, image } = formData;

    // Simple Validation
    if (!title.trim()) {
      setError((prev) => ({ ...prev, title: "Title is required." }));
      return;
    }

    if (!body.trim()) {
      setError((prev) => ({ ...prev, body: "Body is required." }));
      return;
    }

    if (!image) {
      setError((prev) => ({ ...prev, image: "Image is required." }));
      return;
    }

    //  send to an API
    const postData = {
      ...formData,
      image: URL.createObjectURL(formData.image), // show the image name
    };
    dispatch(updatePost(post.id, postData));

    //  reset form after submission

    setFormData({ title: "", body: "", image: null });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg"
      >
        <h1 className="text-xl font-bold mb-4">Update Post</h1>

        {/* Title Input */}
        <Inputfield
          type="text"
          label="Title"
          name="title"
          value={formData.title}
          error={error.title}
          onChange={handleChange}
          maxLength={"200"}
        />

        {/* Body Input */}
        <Inputfield
          type="text"
          label="Body"
          name="body"
          value={formData.body}
          error={error.body}
          onChange={handleChange}
          maxLength={"300"}
        />

        {/* Image Upload */}
        <div className="flex flex-col gap-2 mb-6">
          <label className="text-sm font-medium">Upload Image (JPG only)</label>
          <input
            type="file"
            accept="image/jpeg"
            onChange={handleImageUpload}
            className="file-input"
          />
          {error.image && (
            <span className="text-sm text-red-500">{error.image}</span>
          )}

          {/* Display uploaded image preview */}
          {formData.image && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Uploaded Preview"
                className="w-32 h-32 object-cover rounded-lg shadow"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

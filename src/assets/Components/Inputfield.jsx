/* eslint-disable react/prop-types */
const Inputfield = ({
  type = "text",
  label = "",
  error = "",
  className = "",

  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 mb-6 ${className}`}>
      <div className="relative group">
        {/* Input Field */}
        <input
          type={type}
          placeholder=" "
          className={`w-full p-4 bg-transparent border rounded-lg text-black outline-none peer 
            ${error ? "border-red-500" : "border-gray-300"} 
            focus:border-gray-600`}
          {...props}
        />

        {/* Floating Label */}
        {label && (
          <label
            className={`absolute left-3 top-2 text-sm transition-all duration-300 
              transform -translate-y-1/2 pointer-events-none 
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600 
              ${error ? "text-red-500 peer-focus:text-red-500" : ""}`}
          >
            {label}
          </label>
        )}

        {/* Error Icon */}
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
            ⚠️ {/* Replace with a warning icon if needed */}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Inputfield;

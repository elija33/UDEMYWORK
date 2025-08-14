import React, { useState } from "react";

const FormWithValidation = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(false);

  const options = [
    { value: "", label: "Select an option" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSave = () => {
    if (!inputValue || !selectedOption) {
      setError(true);
    } else {
      setError(false);
      // Handle save logic here
      console.log("Saved:", { inputValue, selectedOption });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Error Message */}
      {error && (
        <div className="text-red-500 font-semibold mb-4">
          Add at least 1 segment
        </div>
      )}

      {/* Form Container */}
      <div className="flex space-x-4 items-start">
        {/* Text Input */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`flex-1 p-2 border rounded-md ${
            error && !inputValue
              ? "border-red-500 bg-red-50"
              : "border-gray-300"
          }`}
          placeholder="Enter text"
        />

        {/* Dropdown */}
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className={`flex-1 p-2 border rounded-md ${
            error && !selectedOption
              ? "border-red-500 bg-red-50"
              : "border-gray-300"
          }`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium text-sm border border-transparent shadow-sm transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FormWithValidation;

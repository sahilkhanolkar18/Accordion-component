const DownKey = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="#1E201E"
    >
      <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
    </svg>
  );
};

// Custom Dropdown Component
const CustomDropdown = ({
  isOpen,
  handleOptionClick,
  onButtonClick,
  selectedOption,
}) => {
  return (
    <div className="relative inline-block w-full">
      {/* Dropdown Button */}
      <button
        className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none flex justify-between"
        aria-haspopup="true"
        onClick={onButtonClick}
      >
        {selectedOption || "Select an option"} <DownKey />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-">
          {["Option 1", "Option 2", "Option 3"].map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;

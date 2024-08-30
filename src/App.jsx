import { useState, useRef, useEffect } from "react";

const CalendarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="#1e40af"
      className="h-4 w-4"
    >
      <path d="M216-96q-29.7 0-50.85-21.5Q144-139 144-168v-528q0-29 21.15-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29.7 0 50.85 21.5Q816-725 816-696v528q0 29-21.15 50.5T744-96H216Zm0-72h528v-360H216v360Zm0-432h528v-96H216v96Zm0 0v-96 96Zm264.21 216q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 144q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Z" />
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#434343"
    >
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
  );
};

const ArrowUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#434343"
    >
      <path d="m280-400 200-200 200 200H280Z" />
    </svg>
  );
};

const data = [
  {
    id: 1,
    name: "Sahil Khanolkar",
    date: "27 Aug",
    amount: "$14,000.50",
    category: "Food Store",
    categoryColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 2,
    name: "John Doe",
    date: "15 Aug",
    amount: "$40,000.50",
    category: "Realtor",
    categoryColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    name: "Jane Smith",
    date: "12 Sept",
    amount: "-$140.50",
    category: "Trader",
    categoryColor: "bg-red-100 text-red-800",
  },
  {
    id: 4,
    name: "Alice Johnson",
    date: "10 Jul",
    amount: "-$200.00",
    category: "Consultant",
    categoryColor: "bg-red-100 text-red-800",
  },
  {
    id: 5,
    name: "Bob Brown",
    date: "13 Mar",
    amount: "$350.75",
    category: "Freelancer",
    categoryColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 6,
    name: "Emily Davis",
    date: "03 Jan",
    amount: "-$500.00",
    category: "Trader",
    categoryColor: "bg-red-100 text-red-800",
  },
];

const App = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const selectRef = useRef(null);

  useEffect(() => {
    if (openAccordionId !== null && selectRef.current) {
      selectRef.current.focus();
      // Timeout to allow focus to register
      setTimeout(() => {
        selectRef.current.click(); // Simulate click to open dropdown
      }, 100);
    }
  }, [openAccordionId]);

  const handleAccordionClick = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="py-2.5 px-4 h-[100vh] w-full flex flex-col items-center justify-center">
      <div className="w-[710px] flex items-center justify-between ">
        <h1 className="text-xl font-semibold text-gray-800 mb-3">
          Transaction History
        </h1>
      </div>
      {data.map((item) => (
        <div key={item.id} className="">
          <div
            className="flex items-center justify-between cursor-pointer border px-4 py-2 w-[710px] mt-1"
            onClick={() => handleAccordionClick(item.id)}
          >
            <div className="flex items-center justify-between w-full ">
              <div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded flex gap-1">
                  <CalendarIcon /> {item.date}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://avatar.iran.liara.run/public/3"
                  alt="Rounded avatar"
                />
                <p className="text-gray-600 text-sm">{item.name}</p>
              </div>

              <span
                className={`${item.categoryColor} text-xs font-medium me-2 px-2.5 py-0.5 rounded-full`}
              >
                {item.category}
              </span>
              <p
                className={`text-sm font-semibold ${
                  item.amount.startsWith("-")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {item.amount}
              </p>

              <div>
                {openAccordionId === item.id ? <ArrowUp /> : <ArrowDown />}
              </div>
            </div>
          </div>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              openAccordionId === item.id
                ? "opacity-100 max-h-[400px] "
                : "max-h-0 opacity-0"
            } mt-2 bg-blue-100 border w-[710px]`}
          >
            {currentStep === 1 && (
              <div className="flex flex-col gap-2 mb-3 px-4 pt-4 ">
                <h1 className="text-gray-800 text-sm">
                  Select From the Drop Down
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <select
                    ref={selectRef}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option defaultValue>Choose an Option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                  </select>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option defaultValue>Choose an Option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                  </select>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="flex flex-col gap-2 mb-4 px-4 pt-4">
                <h1 className="text-gray-800 text-sm">
                  Here is an Example of a Question?
                </h1>
                <div>
                  <div className="flex items-center">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm text-gray-900"
                    >
                      Option 1
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-sm text-gray-900"
                    >
                      Option 2
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="default-radio-3"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="default-radio-3"
                      className="ms-2 text-sm text-gray-900"
                    >
                      Option 3
                    </label>
                  </div>
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="flex flex-col gap-2 mb-4 px-4 pt-4">
                <h1 className="text-gray-800 text-sm">
                  Some text will be here
                </h1>
                <div>
                  <div className="flex items-center mb-1">
                    <input
                      id="default-checkbox-1"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="default-checkbox-1"
                      className="ms-2 text-sm text-gray-900"
                    >
                      Checkbox 1
                    </label>
                  </div>
                  <div className="flex items-center mb-1">
                    <input
                      id="default-checkbox-2"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="default-checkbox-2"
                      className="ms-2 text-sm text-gray-900"
                    >
                      Checkbox 2
                    </label>
                  </div>
                  <div className="flex items-center mb-1">
                    <input
                      id="default-checkbox-3"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="default-checkbox-3"
                      className="ms-2 text-sm text-gray-900"
                    >
                      Checkbox 3
                    </label>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-between mx-2 px-4 pb-4">
              <button
                className={`${
                  currentStep === 1 ? "text-red-900 invisible" : "text-blue-900"
                } text-sm font-semibold`}
                disabled={currentStep === 1}
                onClick={handlePreviousStep}
              >
                Previous
              </button>
              <button
                className={`text-sm font-semibold ${
                  currentStep === 3 ? "hidden" : "text-blue-900"
                }`}
                onClick={handleNextStep}
                disabled={currentStep === 3}
              >
                {currentStep === 3 ? "Save" : "Next"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

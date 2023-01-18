import { useState } from "react";
import { Link } from "react-router-dom";

const PinModal = ({ setModal }) => {
  const [masterPin, setMasterPin] = useState(true);
  const [masterPinConfirm, setMasterPinConfirm] = useState(true);
  return (
    <>
      <div className="overlay" onClick={() => setModal(false)}></div>
      <div className="fixed z-[90] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[616px] bg-[#000000] rounded-[10px] px-6 py-8 sm:p-8 flex justify-start items-center flex-col gap-8">
        <svg
          onClick={() => setModal(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 absolute cursor-pointer top-3 right-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <h3 className="text-white text-2xl sm:text-[33px] font-normal">
          Enter Pin
        </h3>
        <form className="flex max-w-[500px] justify-start w-full items-center flex-col gap-3">
          <div className="w-full mb-2 relative">
            <input
              type={masterPin ? "password" : "text"}
              placeholder="Enter Master Pin"
              className="text-white border-[1px] border-white border-solid bg-input w-full  rounded-[15px] h-[60px] sm:h-[80px] outline-none pl-5 text-base sm:text-[19px] placeholder:text-white   "
            />
            {masterPin ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#A4A2A2"
                onClick={() => setMasterPin(false)}
                className="w-6 h-6 absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#A4A2A2"
                onClick={() => setMasterPin(true)}
                className="w-6 h-6 absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </div>
          <div className="w-full relative">
            <input
              type={masterPinConfirm ? "password" : "text"}
              placeholder="Confirm Master Pin"
              className="text-white border-[1px] border-white border-solid bg-input w-full  rounded-[15px] h-[60px] sm:h-[80px] outline-none pl-5 text-base sm:text-[19px] placeholder:text-white   "
            />
            {masterPinConfirm ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#A4A2A2"
                onClick={() => setMasterPinConfirm(false)}
                className="w-6 h-6 absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#A4A2A2"
                onClick={() => setMasterPinConfirm(true)}
                className="w-6 h-6 absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </div>
          <Link
            onClick={() => setModal(false)}
            to={"/"}
            className="bg-purpleGr flex justify-center items-center no-underline mt-8 border-none text-white text-xl sm:text-2xl font-semibold w-full max-w-[85%] sm:max-w-[388px] h-[50px] sm:h-[54px] rounded-[5px]"
          >
            Confirm
          </Link>
        </form>
      </div>
    </>
  );
};

export default PinModal;

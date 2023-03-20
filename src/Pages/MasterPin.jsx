import { useState } from "react";
import { Link } from "react-router-dom";
import PinModal from "../Components/PinModal";

const MasterPin = () => {
  const [masterPin, setMasterPin] = useState(true);
  const [masterPinConfirm, setMasterPinConfirm] = useState(true);
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <PinModal setModal={setModal} />}
      <div className="w-full py-[80px] max-w-[650px] flex px-5 justify-center items-center flex-col gap-3">
        <img
          src="/logo3.png"
          className="w-full max-w-[286px] object-contain"
          alt=""
        />{" "}
        <h3 className="text-white text-center mt-2 text-[25px] sm:text-[28px] font-normal">
          Set Master Pin
        </h3>
        <p className="text-base sm:text-lg leading-[1.5] mb-5 mt-1 text-center text-gray">
          Your Master Pin is a number between 4 and 6 digits, easy to remember,
          but hard to crack. This pin will act as your master key, you can
          compare it to the pin of your Debit Card.
        </p>
        <form className="flex max-w-[500px] justify-start w-full items-center flex-col gap-3">
          <div className="w-full mb-2 relative">
            <input
              type={masterPin ? "password" : "text"}
              placeholder="Enter Master Pin"
              className="text-white bg-input w-full  rounded-[15px] h-[60px] sm:h-[80px] border-none outline-none pl-5 text-base sm:text-[19px] placeholder:text-white  "
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
              className="text-white bg-input w-full  rounded-[15px] h-[60px] sm:h-[80px] border-none outline-none pl-5 text-base sm:text-[19px] placeholder:text-white  "
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
          <button
            onClick={(e) => {
              e.preventDefault();
              setModal(true);
            }}
            className="bg-purpleGr flex justify-center items-center no-underline mt-8 border-none text-white text-xl sm:text-2xl font-semibold w-full max-w-[85%] sm:max-w-[388px] h-[50px] sm:h-[54px] rounded-[5px]"
          >
            Set
          </button>
        </form>
      </div>
    </>
  );
};

export default MasterPin;

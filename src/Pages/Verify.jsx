import { useState } from "react";
import { Link } from "react-router-dom";
import TwoFactor from "../Components/TwoFactor";

const Verify = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <TwoFactor setModal={setModal} />}
      <div className="w-full max-w-[500px] flex px-5 justify-center items-center flex-col gap-3">
        <img
          src="/logo.png"
          className="w-full max-w-[426px] object-contain"
          alt=""
        />{" "}
        <h3 className="text-white text-center mt-2 text-[25px] sm:text-[28px] font-normal">
          Verify your Email
        </h3>
        <p className="text-base sm:text-lg leading-[1.5] mb-5 mt-1 text-center text-gray">
          An email with instructions to verify your email address has been sent
          to you. Haven't received a verification code in your email? Click the
          button to re-send or contact our support.
        </p>
        <form className="flex justify-start w-full items-center flex-col gap-3">
          <input
            type="email"
            placeholder="Email Address"
            className="text-white bg-input w-full  rounded-[15px] h-[60px] sm:h-[80px] border-none outline-none pl-5 text-base sm:text-[19px] placeholder:text-white  mb-2"
          />{" "}
          <Link
            to={"/master-pin"}
            className="bg-purpleGr flex justify-center items-center no-underline mt-8 border-none text-white text-xl sm:text-2xl font-semibold w-full max-w-[85%] sm:max-w-[388px] h-[50px] sm:h-[54px] rounded-[5px]"
          >
            Submit
          </Link>
        </form>
        <p
          onClick={() => setModal(true)}
          className="text-[#E5E5E5] cursor-pointer mt-3 text-base underline"
        >
          Re-send
        </p>
      </div>
    </>
  );
};

export default Verify;

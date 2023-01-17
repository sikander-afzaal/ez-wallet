import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <div className="w-full max-w-[500px] flex px-5 justify-center items-center flex-col gap-3">
      <img
        src="/logo.png"
        className="w-full max-w-[426px] object-contain"
        alt=""
      />{" "}
      <h3 className="text-white text-center mt-2 text-[28px] sm:text-[33px] font-normal">
        Verify your Email
      </h3>
      <p className="text-lg sm:text-xl leading-[1.5] mb-5 mt-1 text-center text-gray">
        An email with instructions to verify your email address has been sent to
        you. Haven't received a verification code in your email? Click the
        button to re-send or contact our support.
      </p>
      <form className="flex justify-start w-full items-center flex-col gap-3">
        <input
          type="email"
          placeholder="Email Address"
          className="text-white bg-input w-full  rounded-[15px] h-[80px] border-none outline-none pl-5 text-[19px] placeholder:text-white mb-2"
        />{" "}
        <Link
          to={"/master-pin"}
          className="bg-purpleGr flex justify-center items-center no-underline mt-10 border-none text-white text-2xl font-semibold w-full max-w-[388px] h-[54px] rounded-[5px]"
        >
          Submit
        </Link>
      </form>
      <p className="text-[#E5E5E5] mt-3 text-base underline">Re-send</p>
    </div>
  );
};

export default Verify;

import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [hidePassword, sethidePassword] = useState(true);
  return (
    <div className="w-full max-w-[500px] flex px-5 justify-center items-center flex-col gap-3">
      <img
        src="/logo.png"
        className="w-full max-w-[426px] object-contain"
        alt=""
      />
      <h3 className="text-white text-center text-[28px] sm:text-[33px] font-normal">
        Welcome to EZ Wallet
      </h3>
      <p className="text-lg sm:text-xl leading-[1.5] mb-5 text-center text-gray">
        login as a DJ and earn money playing requested song on clubs, patries.{" "}
      </p>
      <div className="flex justify-center mb-3 items-center gap-8">
        <a href="#" target={"#"}>
          <img src="/google.png" className="w-[60px] h-[60px]" alt="" />
        </a>
        <a href="#" target={"#"}>
          <img src="/apple.png" className="w-[60px] h-[60px]" alt="" />
        </a>
        <a href="#" target={"#"}>
          <img src="/fb.png" className="w-[60px] h-[60px]" alt="" />
        </a>
      </div>
      <div className="flex justify-center mb-4 items-center gap-3">
        <div className="h-[2px] bg-[#BDBDBD] w-[58px]"></div>
        <p className="text-white">Or continue with</p>
        <div className="h-[2px] bg-[#BDBDBD] w-[58px]"></div>
      </div>
      <form className="flex justify-start items-center flex-col w-full gap-3">
        <input
          type="text"
          placeholder="User Name"
          className="text-white bg-input w-full  rounded-[15px] h-[80px] border-none outline-none pl-5 text-[19px] placeholder:text-white mb-2"
        />
        <div className="w-full relative">
          <input
            type={hidePassword ? "password" : "text"}
            placeholder="Password"
            className="text-white bg-input w-full  rounded-[15px] h-[80px] border-none outline-none pl-5 text-[19px] placeholder:text-white "
          />
          {hidePassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#A4A2A2"
              onClick={() => sethidePassword(false)}
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
              onClick={() => sethidePassword(true)}
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
        <a href="#" className="text-[#E5E5E5] text-base underline self-end">
          Forgot password
        </a>
        <Link
          to={"/verify"}
          className="bg-purpleGr flex justify-center items-center no-underline mt-8 border-none text-white text-2xl font-semibold w-full max-w-[388px] h-[54px] rounded-[5px]"
        >
          Log In
        </Link>
      </form>
      <p className="text-[#E5E5E5] mt-3 text-base">
        Do not have an account ?{" "}
        <Link to="/sign-up" className="text-white underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;

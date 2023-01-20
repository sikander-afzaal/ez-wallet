import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [hidePassword, sethidePassword] = useState(true);
  const [hidePasswordConfirm, sethidePasswordConfirm] = useState(true);
  return (
    <div className="w-full py-[80px] max-w-[470px] flex px-5 justify-center items-center flex-col gap-3">
      <img
        src="/logo.png"
        className="w-full max-w-[426px] object-contain"
        alt=""
      />
      <h3 className="text-white text-center text-[25] sm:text-[28px] font-normal">
        Welcome to EZZE Wallet
      </h3>
      <p className="text-base sm:text-lg leading-[1.5] mb-5 text-center text-gray">
        login as a DJ and earn money playing requested song on clubs, patries.{" "}
      </p>
      <div className="flex justify-center mb-3 items-center gap-5 sm:gap-8">
        <a href="#" target={"#"}>
          <svg
            className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_795_26)">
              <rect
                width="60"
                height="60"
                rx="15"
                fill="white"
                fillOpacity="0.14"
              />
            </g>
            <path
              d="M42.2569 27.5519H41.25V27.5H30V32.5H37.0644C36.0338 35.4106 33.2644 37.5 30 37.5C25.8581 37.5 22.5 34.1419 22.5 30C22.5 25.8581 25.8581 22.5 30 22.5C31.9119 22.5 33.6513 23.2212 34.9756 24.3994L38.5112 20.8637C36.2787 18.7831 33.2925 17.5 30 17.5C23.0969 17.5 17.5 23.0969 17.5 30C17.5 36.9031 23.0969 42.5 30 42.5C36.9031 42.5 42.5 36.9031 42.5 30C42.5 29.1619 42.4137 28.3438 42.2569 27.5519Z"
              fill="white"
            />
            <path
              d="M18.9414 24.1819L23.0483 27.1938C24.1595 24.4425 26.8508 22.5 30.0002 22.5C31.912 22.5 33.6514 23.2212 34.9758 24.3994L38.5114 20.8637C36.2789 18.7831 33.2927 17.5 30.0002 17.5C25.1989 17.5 21.0352 20.2106 18.9414 24.1819Z"
              fill="white"
            />
            <path
              d="M30.0002 42.5004C33.2289 42.5004 36.1627 41.2648 38.3808 39.2554L34.5121 35.9817C33.2149 36.9682 31.6299 37.5017 30.0002 37.5004C26.7489 37.5004 23.9883 35.4273 22.9483 32.5342L18.8721 35.6748C20.9408 39.7229 25.1421 42.5004 30.0002 42.5004Z"
              fill="white"
            />
            <path
              d="M42.2569 27.5519H41.25V27.5H30V32.5H37.0644C36.5714 33.8853 35.6833 35.0957 34.51 35.9819L34.5119 35.9806L38.3806 39.2544C38.1069 39.5031 42.5 36.25 42.5 30C42.5 29.1619 42.4137 28.3438 42.2569 27.5519Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_b_795_26"
                x="-66"
                y="-66"
                width="192"
                height="192"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="33" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_795_26"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_795_26"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </a>
        <a href="#" target={"#"}>
          <svg
            className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_795_18)">
              <rect
                width="60"
                height="60"
                rx="15"
                fill="white"
                fillOpacity="0.14"
              />
            </g>
            <path
              d="M26.3677 41.2578C25.5817 41.2152 24.8421 40.8724 24.3015 40.3003C23.6547 39.6781 23.0776 38.9873 22.5802 38.2403C21.8033 37.1278 21.1892 35.9101 20.7565 34.624C20.2667 33.2404 20.0091 31.7854 19.994 30.3178C19.9559 28.8777 20.3125 27.4547 21.0252 26.2028C21.5472 25.3004 22.2917 24.5468 23.1877 24.014C24.0738 23.4835 25.085 23.1979 26.1177 23.1865C26.8962 23.2326 27.6613 23.4105 28.3802 23.7128C28.954 23.9653 29.5565 24.1428 30.1752 24.2403C30.8577 24.0973 31.5247 23.888 32.1665 23.6153C32.926 23.3187 33.7303 23.1526 34.5452 23.124C34.654 23.124 34.7615 23.124 34.8652 23.1365C36.6527 23.1878 38.3152 24.0653 39.3652 25.5115C38.5458 25.9498 37.8639 26.6068 37.3954 27.4093C36.9269 28.2119 36.6902 29.1287 36.7115 30.0578C36.7033 30.7682 36.8458 31.4723 37.1295 32.1236C37.4133 32.7749 37.8319 33.3587 38.3577 33.8365C38.8364 34.2925 39.3938 34.658 40.0027 34.9153C39.8777 35.2903 39.734 35.6528 39.5815 36.0178C39.2352 36.8243 38.808 37.5937 38.3065 38.314C37.8322 39.0356 37.2801 39.7029 36.6602 40.304C36.0948 40.8651 35.341 41.1961 34.5452 41.2328C33.8707 41.2029 33.208 41.0446 32.5927 40.7665C31.9292 40.4775 31.2162 40.3192 30.4927 40.3003C29.7488 40.3149 29.0147 40.4724 28.3302 40.764C27.739 41.0308 27.1074 41.1968 26.4615 41.2553L26.3677 41.2578ZM30.3052 23.124C30.2115 23.124 30.1177 23.124 30.024 23.1128C30.0042 22.964 29.9938 22.8141 29.9927 22.664C30.0336 21.4154 30.5216 20.2231 31.3677 19.304C31.841 18.7758 32.4146 18.3471 33.0552 18.0428C33.6522 17.7355 34.3045 17.5506 34.974 17.499C34.9927 17.6628 34.9927 17.8228 34.9927 17.9753C34.9751 19.2042 34.5134 20.3853 33.6927 21.3003C33.2954 21.8331 32.7862 22.2724 32.201 22.5875C31.6158 22.9025 30.9687 23.0857 30.3052 23.124Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_b_795_18"
                x="-66"
                y="-66"
                width="192"
                height="192"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="33" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_795_18"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_795_18"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </a>
        <a href="#" target={"#"}>
          <svg
            className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_795_22)">
              <rect
                width="60"
                height="60"
                rx="15"
                fill="white"
                fillOpacity="0.14"
              />
            </g>
            <g clipPath="url(#clip0_795_22)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 30.0838C15 37.5413 20.4163 43.7425 27.5 45V34.1663H23.75V30H27.5V26.6663C27.5 22.9163 29.9163 20.8337 33.3337 20.8337C34.4163 20.8337 35.5837 21 36.6663 21.1663V25H34.75C32.9163 25 32.5 25.9163 32.5 27.0837V30H36.5L35.8337 34.1663H32.5V45C39.5837 43.7425 45 37.5425 45 30.0838C45 21.7875 38.25 15 30 15C21.75 15 15 21.7875 15 30.0838Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_795_22"
                x="-66"
                y="-66"
                width="192"
                height="192"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="33" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_795_22"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_795_22"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_795_22">
                <rect
                  width="30"
                  height="30"
                  fill="white"
                  transform="translate(15 15)"
                />
              </clipPath>
            </defs>
          </svg>
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
          className="text-white bg-input w-full  rounded-[15px] h-[60px] sm:h-[80px] border-none outline-none pl-5 text-base sm:text-[19px] placeholder:text-white  mb-2"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="text-white bg-input w-full  rounded-[15px] h-[60px] sm:h-[80px] border-none outline-none pl-5 text-base sm:text-[19px] placeholder:text-white  mb-2"
        />
        <div className="w-full relative mb-2">
          <input
            type={hidePassword ? "password" : "text"}
            placeholder="Password"
            className="text-white bg-input w-full  rounded-[15px] h-[60px] sm:h-[80px] border-none outline-none pl-5 text-base sm:text-[19px] placeholder:text-white  "
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
        <div className="w-full relative">
          <input
            type={hidePasswordConfirm ? "password" : "text"}
            placeholder="Confirm Password"
            className="text-white bg-input w-full  rounded-[15px] h-[60px] sm:h-[80px] border-none outline-none pl-5 text-base sm:text-[19px] placeholder:text-white  "
          />
          {hidePasswordConfirm ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#A4A2A2"
              onClick={() => sethidePasswordConfirm(false)}
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
              onClick={() => sethidePasswordConfirm(true)}
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
        <div className="flex justify-start items-start gap-4">
          <input type="checkbox" className="mt-[5px]" />
          <p className="text-[#BDBDBD]">
            I accept the <span className="underline">terms and conditions</span>{" "}
            and <span className="underline">privacy policy</span> of EZ Wallet
          </p>
        </div>
        <Link
          to={"/verify"}
          className="bg-purpleGr flex justify-center items-center no-underline mt-8 border-none text-white text-xl sm:text-2xl font-semibold w-full max-w-[85%] sm:max-w-[388px] h-[50px] sm:h-[54px] rounded-[5px]"
        >
          Sign Up
        </Link>
      </form>
      <p className="text-[#E5E5E5] mt-3 text-base">
        Already have an account ?{" "}
        <Link to="/" className="text-white underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;

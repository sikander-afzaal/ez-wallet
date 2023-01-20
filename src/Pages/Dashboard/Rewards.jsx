import { useState } from "react";

const Rewards = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="flex max-w-[1070px] justify-start items-start flex-col gap-8 w-full">
      <div className="flex md:flex-row flex-col w-full justify-between items-center gap-8 mid:gap-5">
        <div className="flex justify-start items-start flex-col gap-4 w-full">
          <h4 className="text-white opacity-[.65] text-[22px] font-semibold">
            Total Balance
          </h4>
          <p className="text-white leading-[1] font-semibold text-[40px]">
            $12,345.56
          </p>
        </div>
        <div className="flex justify-start items-start flex-col gap-4 w-full">
          <h4 className="text-white opacity-[.65] text-[22px] font-semibold">
            Rewards Wallet
          </h4>
          <p className="text-white leading-[1] font-semibold text-[40px]">
            $259.76
          </p>
        </div>
      </div>
      <div className="flex  justify-start items-start flex-col gap-4">
        <h4 className="text-white text-center sm:text-left opacity-[.65] text-[22px] font-semibold">
          Top -Up Anonymous Virtual Card Below
        </h4>
        <div className="flex flex-wrap justify-start items-center gap-8 w-full">
          <button className="relative sm:min-w-[360px] xl:min-w-max w-full lg:max-w-max  rounded-[10px] bg-transparent h-[50px]">
            <p className="w-full h-full rounded-[10px] px-4 bg-[#222229] flex justify-center items-center text-white font-semibold text-base sm:text-xl">
              CONNECT EXTERNAL WEB3 WALLET
            </p>
            <div className="bg-btnBorder -z-10 rounded-[10px] absolute -inset-[1px]"></div>
          </button>
          <button className="relative sm:min-w-[360px] xl:min-w-max w-full lg:max-w-max  rounded-[10px] bg-transparent h-[50px]">
            <p className="w-full h-full rounded-[10px] px-4 bg-[#222229] flex justify-center items-center text-white font-semibold text-base sm:text-xl">
              TOP-UP CARD WITH REWARD
            </p>
            <div className="bg-btnBorder -z-10 rounded-[10px] absolute -inset-[1px]"></div>
          </button>
          <button className="relative sm:min-w-[360px] xl:min-w-max w-full lg:max-w-max  rounded-[10px] bg-transparent h-[50px]">
            <p className="w-full h-full rounded-[10px] px-4 bg-[#222229] flex justify-center items-center text-white font-semibold text-base sm:text-xl">
              TOP-UP CARDWITH EZZ3 WALLET
            </p>
            <div className="bg-btnBorder -z-10 rounded-[10px] absolute -inset-[1px]"></div>
          </button>
        </div>
      </div>
      <div className="justify-between md:flex-row flex-col items-center md:items-start mt-4 gap-6 flex w-full">
        <div className="flex justify-start gap-2 items-start flex-col p-6 rounded-2xl w-full max-w-full md:max-w-[530px] bg-rewardGr">
          <p className="text-white opacity-[0.65] text-[22px] font-semibold">
            From
          </p>
          <div className="flex relative justify-start items-start flex-col gap-2 w-full">
            <div
              onClick={() => setDropDown((prev) => !prev)}
              className="cursor-pointer h-[64px] bg-[#4C4C4C] rounded-lg flex justify-between items-center px-4 w-full"
            >
              <p className="text-white flex justify-start items-center gap-2 text-[22px] font-medium">
                <img
                  className="w-[32px] object-contain"
                  src="/busd.png"
                  alt=""
                />{" "}
                BUSD
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className={`w-6 h-6 transition-all ${
                  dropDown ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {dropDown && (
              <div className="z-10 max-h-[250px] overflow-y-auto absolute top-[110%] bg-[#4c4c4c] rounded-lg left-0 w-full">
                <p
                  onClick={() => setDropDown(false)}
                  className="text-white cursor-pointer hover:bg-black transition-all flex justify-start p-5 items-center gap-2 text-[22px] font-medium"
                >
                  <img
                    className="w-[32px] object-contain"
                    src="/busd.png"
                    alt=""
                  />{" "}
                  BUSD
                </p>
                <p
                  onClick={() => setDropDown(false)}
                  className="text-white cursor-pointer hover:bg-black transition-all flex justify-start p-5 items-center gap-2 text-[22px] font-medium"
                >
                  <img
                    className="w-[32px] object-contain"
                    src="/busd.png"
                    alt=""
                  />{" "}
                  BUSD
                </p>
                <p
                  onClick={() => setDropDown(false)}
                  className="text-white cursor-pointer hover:bg-black transition-all flex justify-start p-5 items-center gap-2 text-[22px] font-medium"
                >
                  <img
                    className="w-[32px] object-contain"
                    src="/busd.png"
                    alt=""
                  />{" "}
                  BUSD
                </p>
                <p
                  onClick={() => setDropDown(false)}
                  className="text-white cursor-pointer hover:bg-black transition-all flex justify-start p-5 items-center gap-2 text-[22px] font-medium"
                >
                  <img
                    className="w-[32px] object-contain"
                    src="/busd.png"
                    alt=""
                  />{" "}
                  BUSD
                </p>
                <p
                  onClick={() => setDropDown(false)}
                  className="text-white cursor-pointer hover:bg-black transition-all flex justify-start p-5 items-center gap-2 text-[22px] font-medium"
                >
                  <img
                    className="w-[32px] object-contain"
                    src="/busd.png"
                    alt=""
                  />{" "}
                  BUSD
                </p>
                <p
                  onClick={() => setDropDown(false)}
                  className="text-white cursor-pointer hover:bg-black transition-all flex justify-start p-5 items-center gap-2 text-[22px] font-medium"
                >
                  <img
                    className="w-[32px] object-contain"
                    src="/busd.png"
                    alt=""
                  />{" "}
                  BUSD
                </p>
                <p
                  onClick={() => setDropDown(false)}
                  className="text-white cursor-pointer hover:bg-black transition-all flex justify-start p-5 items-center gap-2 text-[22px] font-medium"
                >
                  <img
                    className="w-[32px] object-contain"
                    src="/busd.png"
                    alt=""
                  />{" "}
                  BUSD
                </p>
              </div>
            )}
          </div>
          <p className="text-white mt-3 opacity-[0.65] text-[22px] font-semibold">
            Amount to load to VISA
          </p>
          <div className="w-full flex-wrap xl:flex-nowrap flex justify-between items-center gap-4">
            <button className="w-full bg-[#4C4C4C] rounded-lg h-[64px] border-none text-white text-[22px] font-medium">
              $100
            </button>
            <button className="w-full bg-[#4C4C4C] rounded-lg h-[64px] border-none text-white text-[22px] font-medium">
              $200
            </button>
            <button className="w-full bg-[#4C4C4C] rounded-lg h-[64px] border-none text-white text-[22px] font-medium">
              $500
            </button>
            <button className="w-full bg-[#4C4C4C] rounded-lg h-[64px] border-none text-white text-[22px] font-medium">
              $750
            </button>
            <button className="w-full bg-[#4C4C4C] rounded-lg h-[64px] border-none text-white text-[22px] font-medium">
              $1500
            </button>
          </div>
          <button className="bg-purpleGr mt-4 w-full h-[50px] text-white rounded-[10px] border-none text-xl font-semibold">
            Continue
          </button>{" "}
          <p className="text-white opacity-[0.65] mt-3 w-full text-center text-[20px] font-semibold">
            SHOW BALANCE FOR EXISTING CARD
          </p>
        </div>
        <img
          src="/card.png"
          className="object-contain w-full max-w-[343px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Rewards;

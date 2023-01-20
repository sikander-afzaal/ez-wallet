import TimerNftBox from "../../Components/TimerNftBox";

const Connected = () => {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-10">
      <div className="flex justify-start items-start flex-col gap-4 w-full">
        <h4 className="text-white opacity-[.65] text-[22px] font-semibold">
          Total Balance
        </h4>
        <p className="text-white leading-[1] font-semibold text-[40px]">
          $12,345.56
        </p>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 auto-rows-fr w-full gap-8 sm:gap-[60px]">
        <TimerNftBox img="/big-nft.png" time="1 year 23 days 5 hours" />
        <TimerNftBox img="/big-nft.png" time="1 year 23 days 5 hours" />
        <TimerNftBox img="/big-nft.png" time="1 year 23 days 5 hours" />
        <div className="flex justify-start items-start flex-col gap-5 w-full ">
          <h4 className="text-white opacity-[0.65] text-xl">Time Running</h4>
          <div className="w-full bg-plusBg flex justify-center items-center h-full border-2 rounded-2xl border-dashed border-[#6D6D6D]">
            <div className="text-white w-[90px] sm:w-[124px] h-[90px] sm:h-[124px] cursor-pointer flex justify-center items-center rounded-full bg-[#FFFFFF4D]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connected;

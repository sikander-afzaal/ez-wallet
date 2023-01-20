const Topup = () => {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-7">
      <div className="flex justify-start items-start flex-col gap-4 w-full">
        <h4 className="text-white opacity-[.65] text-[22px] font-semibold">
          Total Balance
        </h4>
        <p className="text-white leading-[1] font-semibold text-[40px]">
          $12,345.56
        </p>
      </div>
      <div className="flex w-full justify-start items-start flex-col gap-4">
        <h4 className="text-white opacity-[.65] text-[22px] font-semibold">
          Top-Up Below
        </h4>
        <div className="w-full max-w-[530px] flex justify-start items-start flex-col gap-5 rounded-2xl bg-purple p-5">
          <div className="flex justify-between w-full h-[64px] bg-[#4d4d4d] gap-4 rounded-lg items-center  pr-1 pl-4">
            <input
              type="text"
              placeholder="0.00"
              className="bg-transparent h-full w-full  text-white outline-none border-none font-semibold text-[22px] placeholder:text-white"
            />
            <div className="flex justify-center items-center gap-2 sm:gap-4 rounded-lg bg-[#222831] min-w-[110px] sm:min-w-[160px] h-[56px] text-white">
              <h3 className="rounded-full bg-green w-[32px] h-[32px] flex justify-center items-center p-2 text-base font-medium">
                $
              </h3>
              <p className="text-inherit text-[22px] font-medium">USD</p>
            </div>
          </div>
          <div className="flex justify-between w-full h-[64px] bg-[#4d4d4d] gap-4 rounded-lg items-center  sm:pr-1 pr-4 pl-4">
            <input
              type="text"
              placeholder="0.00"
              className="bg-transparent h-full w-full  text-white outline-none border-none font-semibold text-[22px] placeholder:text-white"
            />
            <div className="flex justify-start items-center gap-2 min-w-max">
              <img
                src="/busd.png"
                className="w-[32px] h-[32px] object-contain"
                alt="busd"
              />
              <p className="text-white text-[22px] font-medium">BUSD</p>
            </div>
            <div className="hidden sm:flex justify-center items-center gap-4 rounded-lg bg-[#222831] min-w-[160px] h-[56px] text-white">
              <p className="text-inherit text-[22px] font-medium">BALANCE</p>
            </div>
          </div>
          <div className="flex gap-5 sm:gap-3 justify-start items-center sm:items-start flex-col w-full">
            <p className="text-white font-semibold text-xl opacity-[0.65]">
              PAY WITH
            </p>
            <div className="flex sm:flex-row flex-col justify-between items-center gap-6 sm:gap-4 w-full">
              <div className="flex justify-center items-center gap-6">
                <img
                  src="/apple-ico.png"
                  className="bg-[#4c4c4c] cursor-pointer  h-[64px] object-contain rounded-lg p-3 w-[64px]"
                  alt=""
                />
                <img
                  src="/g-plus.png"
                  className="bg-[#DC4E42] cursor-pointer h-[64px] object-contain rounded-lg p-3 w-[64px]"
                  alt=""
                />
                <img
                  src="/master-card.png"
                  className="bg-white cursor-pointer h-[64px] object-contain rounded-lg p-3 w-[64px]"
                  alt=""
                />
              </div>
              <button className="bg-purpleGr w-[167px] h-[48px] text-white rounded-[10px] border-none text-xl font-semibold">
                Continue
              </button>
            </div>
            <div className="flex justify-start items-center mt-2 gap-4">
              <input type="checkbox" />
              <p className="text-white font-semibold text-xl opacity-[0.65]">
                I agree with terms and conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;

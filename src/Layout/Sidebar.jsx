const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <>
      {sidebar && (
        <div
          onClick={() => setSidebar(false)}
          className="fixed top-0 left-0 z-40 bg-black opacity-60 w-full h-full"
        ></div>
      )}
      <div
        className={`lg:max-w-none overflow-y-auto gap-10 lg:gap-[80px] h-full border-r-[1px] px-6 justify-between pt-6 lg:pt-[140px] pb-5  border-[rgba(255,255,255,0.25)] border-solid flex  items-start flex-col sidebar lg:static fixed w-full max-w-[450px] ${
          sidebar ? "left-0" : "-left-[600px]"
        } top-0 bg-black z-50 lg:bg-transparent transition-all duration-1000`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          onClick={() => setSidebar(false)}
          className="w-7 h-7 absolute top-3 lg:hidden block  right-3 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <div className="flex justify-start w-full items-start flex-col gap-4">
          <h3 className="text-white font-semibold text-xl mb-3">Menu</h3>
          <div
            className={`flex cursor-pointer justify-start gap-4 items-center bg-purple rounded-[10px] py-[8px] px-[12px] w-full text-white`}
          >
            <img
              src="/dash-ico.png"
              className={`w-[18px] h-[18px] object-contain`}
              alt=""
            />
            <p className={`text-white font-medium text-xl`}>Dashboard</p>
          </div>
          <div
            className={`flex cursor-pointer justify-start items-center gap-6 w-full text-white py-[8px]`}
          >
            <img
              src="/top-up.png"
              className={`w-[27px] h-[27px] p-[5px] object-contain border-[#FFFFFF80] border-[1px] border-solid rounded-[4px]`}
              alt=""
            />
            <p className={`text-[#D2D2D2] font-medium text-xl`}>Topup Wallet</p>
          </div>
          <div
            className={`flex cursor-pointer justify-start items-center gap-6 w-full text-white py-[8px]`}
          >
            <img
              src="/visa.png"
              className={`w-[27px] h-[27px] p-[5px] object-contain border-[#FFFFFF80] border-[1px] border-solid rounded-[4px]`}
              alt=""
            />
            <p className={`text-[#D2D2D2] font-medium text-xl`}>Visa/Rewards</p>
          </div>
          <div
            className={`flex cursor-pointer justify-start items-center gap-6 w-full text-white py-[8px]`}
          >
            <img
              src="/top-up.png"
              className={`w-[27px] h-[27px] p-[5px] object-contain border-[#FFFFFF80] border-[1px] border-solid rounded-[4px]`}
              alt=""
            />
            <p className={`text-[#D2D2D2] font-medium text-xl`}>
              Referral/Metrics
            </p>
          </div>
          <div
            className={`flex cursor-pointer justify-start items-center gap-6 w-full text-white py-[8px]`}
          >
            <img
              src="/visa.png"
              className={`w-[27px] h-[27px] p-[5px] object-contain border-[#FFFFFF80] border-[1px] border-solid rounded-[4px]`}
              alt=""
            />
            <p className={`text-[#D2D2D2] font-medium text-xl`}>
              Connected Dapps
            </p>
          </div>
        </div>
        <div className="flex justify-start w-full items-start flex-col gap-2">
          <h3 className="text-white font-semibold text-xl mb-3">More</h3>

          <div
            className={`flex cursor-pointer justify-start items-center gap-6 w-full text-white py-[8px]`}
          >
            <img
              src="/settings.png"
              className={`w-[27px] h-[27px] p-[5px] object-contain border-[#FFFFFF80] border-[1px] border-solid rounded-[4px]`}
              alt=""
            />
            <p className={`text-[#D2D2D2] font-medium text-xl`}>Settings</p>
          </div>
          <div
            className={`flex cursor-pointer justify-start items-center gap-6 w-full text-white py-[8px]`}
          >
            <img
              src="/visa.png"
              className={`w-[27px] h-[27px] p-[5px] object-contain border-[#FFFFFF80] border-[1px] border-solid rounded-[4px]`}
              alt=""
            />
            <p className={`text-[#D2D2D2] font-medium text-xl`}>Options</p>
          </div>

          <div
            className={`flex cursor-pointer justify-start items-center gap-6 w-full text-white py-[8px]`}
          >
            <img
              src="/visa.png"
              className={`w-[27px] h-[27px] p-[5px] object-contain border-[#FFFFFF80] border-[1px] border-solid rounded-[4px]`}
              alt=""
            />
            <p className={`text-[#D2D2D2] font-medium text-xl`}>Help</p>
          </div>
        </div>
        <div className="flex cursor-pointer justify-start items-center gap-4">
          <img src="/log-out.png" className="object-contain w-5" alt="" />
          <p className="text-white font-medium text-xl">Log Out</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

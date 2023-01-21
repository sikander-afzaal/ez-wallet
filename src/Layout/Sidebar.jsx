import NavlinkSidebar from "../Components/NavlinkSidebar";

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
        className={`lg:max-w-none overflow-y-auto max-h-[900px] gap-10 lg:gap-[80px] h-full  px-6 justify-between  pt-3 pb-5   top-0 flex  items-start flex-col sidebar lg:sticky fixed w-full max-w-[450px] ${
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
        <img
          src="/logo.png"
          className="max-w-[130px] w-full object-contain self-center -mb-[60px]"
          alt=""
        />
        <div className="flex justify-start w-full items-start flex-col gap-4">
          <h3 className="text-white font-semibold text-xl mb-3">Menu</h3>
          <NavlinkSidebar
            img="/dash-ico.png"
            name="Dashboard"
            link="/dashboard"
            setSidebar={setSidebar}
          />
          <NavlinkSidebar
            img="/top-up.png"
            name="Topup Wallet"
            link="/dashboard/top-up"
            setSidebar={setSidebar}
          />{" "}
          <NavlinkSidebar
            img="/visa.png"
            name="Visa/Rewards"
            link="/dashboard/rewards"
            setSidebar={setSidebar}
          />
          <NavlinkSidebar
            img="/top-up.png"
            name="Referral/Metrics"
            link="/dashboard/referral"
            setSidebar={setSidebar}
          />
          <NavlinkSidebar
            img="/visa.png"
            name="Connected Dapps"
            link="/dashboard/connected"
            setSidebar={setSidebar}
          />
        </div>
        <div className="flex justify-start w-full items-start flex-col gap-2">
          <h3 className="text-white font-semibold text-xl mb-3">More</h3>

          <div
            onClick={() => setSidebar(false)}
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
            onClick={() => setSidebar(false)}
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
            onClick={() => setSidebar(false)}
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
        <div
          onClick={() => setSidebar(false)}
          className="flex cursor-pointer justify-start items-center gap-4"
        >
          <img src="/log-out.png" className="object-contain w-5" alt="" />
          <p className="text-white font-medium text-xl">Log Out</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

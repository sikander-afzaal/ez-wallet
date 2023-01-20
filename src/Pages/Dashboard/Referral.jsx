import DoughnutApp from "../../Components/Dougnut";
import { BarChart } from "../../Components/BarChart";

const Referral = () => {
  const REFER_DATA = [
    {
      name: "CO2 Miner",
      link: "https://www.canva.com/design/",
      color: "#4ADAB4",
    },
    {
      name: "GREENGROWER",
      link: "https://www.canva.com/design/",
      color: "#B89CFD",
    },
    {
      name: "YIELD FARM",
      link: "https://www.canva.com/design/",
      color: "#FFB2F5",
    },
    {
      name: "CO2 MINER",
      link: "https://www.canva.com/design/",
      color: "#FFA6A6",
    },
    {
      name: "GREENGROWER",
      link: "https://www.canva.com/design/",
      color: "#54A0FF",
    },
  ];
  return (
    <div className="flex justify-start items-start flex-col gap-10 w-full">
      <div className="flex mid:flex-row flex-col w-full justify-between items-center gap-8 mid:gap-5">
        <div className="flex justify-start items-start flex-col gap-4 w-full">
          <h4 className="text-white opacity-[.65] text-[22px] font-semibold">
            Total Balance
          </h4>
          <p className="text-white leading-[1] font-semibold text-[40px]">
            $12,345.56
          </p>
        </div>{" "}
        <div className="flex justify-start items-start flex-col gap-4 w-full">
          <h4 className="text-white opacity-[.65] text-[22px] font-semibold">
            Referrals Tracker
          </h4>
          <p className="text-white leading-[1] font-semibold text-[40px]">
            37 Total
          </p>
        </div>{" "}
        <div className="flex justify-start items-start flex-col gap-4 w-full">
          <h4 className="text-white opacity-[.65] text-[22px] font-semibold">
            Rewards Wallet
          </h4>
          <p className="text-white leading-[1] font-semibold text-[40px]">
            $259.76
          </p>
        </div>
      </div>
      <div className="grid w-full gap-x-[40px] gap-y-[40px] grid-cols-1 mid:grid-cols-2 auto-rows-auto">
        <div className="flex h-full justify-start  items-start flex-col gap-4 w-full">
          <h4 className="text-white flex justify-start items-center gap-3 opacity-[.65] text-xl font-semibold">
            <img
              src="/performance.png"
              className="w-[30px] object-contain"
              alt=""
            />{" "}
            Rewards Performance
          </h4>
          <div className="p-6 grid place-items-center max-h-[500px] h-full rounded-[16px] w-full bg-darkGr">
            <DoughnutApp />
            {/* <img
              src="/circle-graph.png"
              className="w-full h-full object-contain"
              alt=""
            /> */}
          </div>
        </div>
        <div className="flex h-full justify-start  items-start flex-col gap-4 w-full">
          <h4 className="text-white flex justify-start items-center gap-3 opacity-[.65] text-xl font-semibold">
            <img
              src="/performance.png"
              className="w-[30px] object-contain"
              alt=""
            />{" "}
            Referrals Performance
          </h4>
          <div className="p-6 h-full flex justify-center items-center rounded-[16px] w-full bg-darkGr">
            <BarChart />
          </div>
        </div>
        <div className="flex h-full justify-start  items-start flex-col gap-4 w-full">
          <h4 className="text-white flex justify-start items-center gap-3 opacity-[.65] text-xl font-semibold">
            <img src="/refer.png" className="w-[30px] object-contain" alt="" />{" "}
            Referrals Links
          </h4>
          <div className="p-6 h-full rounded-[16px] gap-7 flex justify-start items-start flex-col w-full bg-darkGr">
            {REFER_DATA.map((elem, idx) => {
              return (
                <ReferRow copy number={idx + 1} {...elem} key={idx + "row"} />
              );
            })}
          </div>
        </div>
        <div className="flex h-full justify-start  items-start flex-col gap-4 w-full">
          <h4 className="text-white flex justify-start items-center gap-3 opacity-[.65] text-xl font-semibold">
            <img src="/trophy.png" className="w-[30px] object-contain" alt="" />{" "}
            Top Reward Platforms
          </h4>
          <div className="p-6 h-full rounded-[16px] gap-7 flex justify-start items-start flex-col w-full bg-darkGr">
            {REFER_DATA.map((elem, idx) => {
              return (
                <ReferRow number={idx + 1} {...elem} key={idx + "copy-row"} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;

const ReferRow = ({ color, link, copy, name, number }) => {
  return (
    <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-3 w-full">
      <div className="flex justify-start sm:w-auto w-full items-center gap-3">
        <p
          style={{ backgroundColor: color }}
          className=" flex justify-center items-center text-black font-semibold text-base w-[22px] h-[22px] rounded-full "
        >
          {number}
        </p>
        <p className="text-white uppercase opacity-[0.65] font-semibold ">
          {name}
        </p>
      </div>
      <div className="flex justify-end sm:w-auto w-full text-[#B4ACC8] items-center gap-3">
        <a
          href={link}
          target={"blank"}
          className="text-inherit text-sm sm:text-base no-underline font-semibold"
        >
          {link}
        </a>
        {copy && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigator.clipboard.writeText(link)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

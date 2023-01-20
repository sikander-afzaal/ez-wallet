import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { LineChart } from "../../Components/LineChart";
import { PierChart } from "../../Components/PieChart";

const Home = () => {
  return (
    <div className="flex justify-start items-start gap-9 flex-col min-h-full w-full">
      <div className="w-full flex justify-start items-start flex-col md:grid  md:grid-cols-2 md:grid-rows-[auto__auto] gap-x-10 gap-y-[30px] md:gap-y-[50px] xl:gap-y-[50px]">
        <div className="flex justify-start items-start flex-col gap-4 w-full">
          <h4 className="text-white opacity-[.65] text-xl font-semibold">
            Total Balance
          </h4>
          <p className="text-white leading-[1] font-semibold text-[40px]">
            $12,345.56
          </p>
        </div>
        <div className="flex justify-start items-start flex-col gap-4 w-full">
          <h4 className="text-white opacity-[.65] text-xl font-semibold">
            Total Balance
          </h4>
          <div className="flex xl:flex-nowrap flex-wrap  xl:h-[48px] justify-start items-center gap-5 w-full">
            <button className="uppercase border-none bg-purpleGr h-[50px] xl:h-full text-white text-sm 2xl:text-base font-semibold rounded-[10px] w-full xl:max-w-[170px]">
              34 CO2 Miner
            </button>
            <button className="uppercase border-none bg-purpleGr h-[50px] xl:h-full text-white text-sm 2xl:text-base font-semibold rounded-[10px] w-full xl:max-w-[170px]">
              12 GreenGrower
            </button>
            <button className="uppercase border-none bg-purpleGr h-[50px] xl:h-full text-white text-sm 2xl:text-base font-semibold rounded-[10px] w-full xl:max-w-[170px]">
              9 yield farm
            </button>
          </div>
        </div>
        <div className="flex h-full justify-start  items-start flex-col gap-4 w-full">
          <h4 className="text-white opacity-[.65] text-xl font-semibold">
            Spent past month
          </h4>
          <div className="p-6 h-full max-h-[450px] flex justify-center items-center rounded-[16px] w-full bg-darkGr">
            <PierChart />
            {/* <img
              src="/pie.png"
              className="w-full h-full object-contain"
              alt=""
            /> */}
          </div>
        </div>
        <div className="flex h-full justify-start items-start flex-col gap-4 w-full">
          <h4 className="text-white opacity-[.65] text-xl font-semibold">
            Earned past month
          </h4>
          <div className="p-6  h-full flex justify-center items-center rounded-[16px] w-full bg-darkGr">
            <LineChart />
            {/* <img
              src="/linechart.png"
              className="w-full h-full object-contain"
              alt=""
            /> */}
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-start items-start flex-col gap-5">
        <h4 className="text-white opacity-[.65] text-xl font-semibold">
          NFT / Collectables
        </h4>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            width: "100%",
            autoWidth: true,
            drag: "free",
            type: "loop",
            gap: "2rem",
          }}
        >
          {Array(5)
            .fill(false)
            .map((elem, idx) => {
              return (
                <SplideSlide key={idx + "image-nft-dash"}>
                  <div className="w-[203px] h-[267px]">
                    <img
                      src={`/nft-img${idx + 1}.png`}
                      className="w-full h-full object-contain"
                      alt=""
                    />
                  </div>
                </SplideSlide>
              );
            })}
        </Splide>
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = ({ setSidebar }) => {
  const [show, setShow] = useState({
    heading: "Welcome, Prof D",
    dropdown: true,
  });
  const { pathname } = useLocation();
  useEffect(() => {
    switch (pathname) {
      case "/dashboard":
        setShow({
          heading: "Welcome, Prof D",
          dropdown: true,
        });
        break;
      case "/dashboard/connected":
        setShow({
          heading: "Connected DAPPS",
          dropdown: false,
        });
        break;
      case "/dashboard/top-up":
        setShow({
          heading: "Welcome, Prof D",
          dropdown: false,
        });
        break;
      case "/dashboard/referral":
        setShow({
          heading: "Connected DAPPS",
          dropdown: false,
        });
        break;
      case "/dashboard/rewards":
        setShow({
          heading: "Welcome, Prof D",
          dropdown: false,
        });
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <div className="flex  border-l-[1px] justify-between px-7 items-center w-full header h-[120px] border-[rgba(255,255,255,0.25)] border-solid border-b-[1px]">
      <div className="flex justify-start items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          onClick={() => setSidebar(true)}
          className="w-7 h-7 cursor-pointer lg:hidden block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>

        <h3 className="font-semibold  text-2xl sm:text-[30px] xl:text-[33px] text-white">
          {show.heading}
        </h3>
      </div>
      <div className="flex justify-start items-center gap-5">
        {/* <div className="hidden md:flex justify-start text-[#8A8A8A] items-center gap-3 px-3 w-[200px] xl:w-[300px] bg-[#202020] rounded-[10px] h-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="text-inherit placeholder:text-inherit bg-transparent border-none outline-none w-full font-medium text-base"
          />
        </div> */}
        {show.dropdown && (
          <div className="hidden md:flex justify-start text-white items-center gap-3 px-3 w-[120px] bg-[#202020] rounded-[10px] h-[50px]">
            <h3 className="rounded-full bg-green w-[22px] h-[22px] flex justify-center items-center p-2 text-base font-medium">
              $
            </h3>
            <p className="uppercase text-inherit font-medium text-xl">USD</p>
            <svg
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.42929 6.37875C0.805282 6.37875 0.372174 6.0954 0.129967 5.52871C-0.113165 4.96294 -0.0151728 4.4605 0.423944 4.02138L4.02932 0.416005C4.16799 0.277337 4.31821 0.173337 4.47999 0.104002C4.64177 0.0346682 4.81511 0 5 0C5.18489 0 5.35823 0.0346682 5.52001 0.104002C5.68179 0.173337 5.83201 0.277337 5.97068 0.416005L9.57606 4.02138C10.0152 4.4605 10.1132 4.96294 9.87003 5.52871C9.62783 6.0954 9.19472 6.37875 8.57071 6.37875H1.42929Z"
                fill="#009A3D"
              />
            </svg>
          </div>
        )}
        <img
          src="/prof.png"
          className="w-[42px] sm:w-[50px]  object-contain "
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;

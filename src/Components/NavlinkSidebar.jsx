import { NavLink } from "react-router-dom";

const NavlinkSidebar = ({ name, link, img, setSidebar }) => {
  const normalStylesLink = `transition-all duration-500 flex cursor-pointer justify-start items-center gap-6 w-full text-white py-[8px]`;
  const activeStylesLink = `flex cursor-pointer justify-start gap-4 items-center bg-purple rounded-[10px] py-[8px] px-[12px] w-full text-white`;
  const normalStylesImg = `w-[27px] h-[27px] p-[5px] object-contain border-[#FFFFFF80] border-[1px] border-solid rounded-[4px]`;
  const activeStylesImg = `w-[18px] h-[18px] object-contain`;
  return (
    <NavLink
      onClick={() => setSidebar(false)}
      end
      to={link}
      className={({ isActive }) =>
        isActive ? activeStylesLink : normalStylesLink
      }
    >
      {({ isActive }) => (
        <>
          <img
            src={img}
            className={isActive ? activeStylesImg : normalStylesImg}
            alt=""
          />
          <p
            className={`${
              isActive ? "text-white" : "text-[#d2d2d2]"
            } font-medium text-xl`}
          >
            {name}
          </p>
        </>
      )}
    </NavLink>
  );
};

export default NavlinkSidebar;

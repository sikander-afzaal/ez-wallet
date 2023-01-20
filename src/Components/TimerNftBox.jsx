const TimerNftBox = ({ time, img }) => {
  return (
    <div className="flex rounded-2xl overflow-hidden justify-start items-start flex-col gap-5 w-full ">
      <h4 className="text-white opacity-[0.65] text-base sm:text-xl">
        Time Running: {time}
      </h4>
      <img src={img} className="w-full object-contain" alt="" />
    </div>
  );
};

export default TimerNftBox;

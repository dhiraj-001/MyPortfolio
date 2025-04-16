
import React from "react";

interface ResumeCardProps {
  title: string;
  subTitle: string;
  result: string;
  des: string;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-1/3 lg:h-36 group flex ">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative lg:hidden">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-primaryDk inline-flex group-hover:bg-secondarydk duration-300"></span>
        </span>
      </div>
      <div className="w-full border-2 border-[#ffffff5d] hover:border-[#2611386d] dark:bg-[#533376] hover:dark:bg-[#70578c] hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl text-[#d8caff] mt-5 md:text-2xl font-body font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 font-head text-[#bdaeeb] group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 font-bold dark:text-[#8f2dc4] dark:bg-[#fff] bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-body">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-slate-700 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;

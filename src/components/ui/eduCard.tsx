import React from 'react';
import { motion } from "framer-motion";
import ResumeCard from "./educrd";

interface EduCardProps {
  title: string;
  subTitle: string;
  result: string;
  des: string;
}

const EduCard: React.FC<EduCardProps> = ({ title, subTitle, result, des }) => {
  return (
    <motion.div
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 justify-center items-center"
    >
      <div className="m-4 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col lg:flex-row gap-10">
        <ResumeCard
          title={title}
          subTitle={subTitle}
          result={result}
          des={des}
        />
      </div>
    </motion.div>
  );
}

export default EduCard;

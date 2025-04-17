import { motion } from "framer-motion";
import ResumeCard from "./educrd";
import { education } from "@/data/education";

function EduCard() {
  return (
    <motion.div
      id="education"
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 justify-center items-center"
    >
      <div>

        <div className="m-4 w-[300px] sml:w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col lg:flex-row gap-10">
          {education.map((edu, i) => (
            <ResumeCard
              key={i}
              title={edu.title}
              subTitle={edu.subTitle}
              result={edu.result}
              des={edu.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default EduCard;

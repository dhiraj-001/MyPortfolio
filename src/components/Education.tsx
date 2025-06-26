import React from 'react'
import { motion } from 'framer-motion'
import EduCard from './ui/eduCard'
import { education } from '@/data/education'

function Education() {
  return (
    <div className='my-5' id='education'>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-head font-bold md:text-5xl mb-4 text-black dark:text-white max-w-4xl"
        >
          Education
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className='text-neutral-700 dark:text-neutral-300 text-sm font-body md:text-base max-w-sm'
        >
          My educational qualifications
        </motion.div>
      </div>
      <div className='edu_cards flex flex-col items-center gap-8 px-4'>
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-4xl"
          >
            <EduCard 
              title={item.title}
              subTitle={item.subTitle}
              result={item.result}
              des={item.des}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Education
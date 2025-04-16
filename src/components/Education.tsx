import React from 'react'
import EduCard from './ui/eduCard'

function Education() {
  return (
    <div className='my-5'>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl font-head font-bold md:text-5xl mb-4 text-black dark:text-white max-w-4xl">
          Education
        </h2>
        <div className='text-neutral-700 dark:text-neutral-300 text-sm font-body md:text-base max-w-sm'>
          My educational qualifications
        </div>
      </div>
      <div className='edu_cards '>
        <EduCard />
      </div>
    </div>
  )
}

export default Education
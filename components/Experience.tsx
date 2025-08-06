import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center" id="experience">
      <h1 className="heading">
        My{' '} <br className='md:hidden'/>
        <span className="text-purple">Work Experience</span>
      </h1>
      <div className="md:w-full w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10">
        {workExperience.map((card)=>(
            <Button 
                key={card.id}
                borderRadius='1.75rem'
                duration={Math.floor(Math.random()*10000 + 10000)}
                className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            >
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <div className='lg:ms-5'>
                        <h1 className='font-bold text-start text-lg md:text-2xl'>
                            {card.title}
                        </h1>
                        <p className='font-extralight text-sm md:text-lg text-start opacity-50'>{card.year}</p>
                        <p className='text-white-100 text-start font-semibold mt-3'>
                            {card.desc}
                        </p>
                    </div>
                </div>
            </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
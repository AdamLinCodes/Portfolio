import React from 'react'
import { Card } from 'flowbite-react';

export default function AboutMeComponent() {
  return (
    <Card id = "about-me" className='m-10'>  
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        About Me
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Hello to anyone viewing perusing my portfolio, and welcome! My name is Adam Lin, and I in my final year of
        my bachelors degree in Computer Science at Carleton University. I built this portfolio as I noticed a growing
        number of a applications I sent asked me if I had a personal website. At the same time, I was required to
        do some research on, and test out the compatibility, usability, work-flow etc. of React.js with Tailwind, so
        the timing just seemed perfect. At the bottom, I'll include links to the websites and videos that helped me
        out the most.
      </p>
    </Card>
  )
}

import React from 'react'
import { Carousel } from 'flowbite-react';

export default function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img
          src="/images/camping.jpg"
          alt="..."
        />
        <img
          src="/images/ea.jpg"
          alt="..."
        />
        <img
          src="/images/newyork.jpg"
          alt="..."
        />
        <img
          src="/images/surf.jpg"
          alt="..."
        />
        <img
          src="/images/vex.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  )
}

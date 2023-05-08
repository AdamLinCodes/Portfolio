import React from 'react'
import { Card, Accordion } from 'flowbite-react';

export default function FavTechComponent() {
  return (
    <Card id = "tech-interest" className='sm:m-5 md:m-10 lg:m-20 xl:m-32 m-2'>  
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        My Recent Tech Interests
      </h5>
      
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            OOP Design
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              I am personally a big fan of OOP design patterns. Specifically, recognizing when data (not only) can,
              but should be represented a single entity. After that, making use of as many OOP design patterns and principals, 
              for me at least, always results in a beautiful, scalable, and modular program. Recently in my spare time I've 
              been reading this book:  <a href='https://en.wikipedia.org/wiki/Design_Patterns'>Design Patterns: Elements of Reusable Object-Oriented Software</a><br/><br/>Check it out if your interested!
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Accessible UI/UX
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              My first internship required me to learn a bit about accessible code. What I found was that most sites short-comings 
              were from missing alt text, tab ordering, and colour contrasting. I also recently took a HCI course, which showed me
              how many websites don't have good accessibility. Checkout these links if you want to learn more: <br/>
            </p>
            <ul>
              <li><a href='https://www.w3.org/WAI/standards-guidelines/wcag/'>https://www.w3.org/WAI/standards-guidelines/wcag/</a></li>
              <li><a href='https://www.a11yproject.com/'>https://www.a11yproject.com/</a></li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            AI Research
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              When AI first starting making significant strides, I, like a lot of people thought it was the coolest thing ever, and 
              that people who were worried about had seen to many sci-fi films. Not to say I've completely converted to the other side,
              though I do think there are serious potential risks in the future. What caught my attention was a petition that more than
              1000 AI researchers signed a petition to pause the development of AI until more measures can be put in place. Here's an interesting
              article about the 'pause': <a href='https://futureoflife.org/wp-content/uploads/2023/04/FLI_Policymaking_In_The_Pause.pdf'>https://futureoflife.org/wp-content/uploads/2023/04/FLI_Policymaking_In_The_Pause.pdf</a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Finding a job in tech
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              A few years ago, I remember it being all too easy to find a job in tech if you were in Computer Science. It had one of the fastest growing 
              job markets, if not the highest, but recently has taken a bit of a turn-around. The tech industry increased its layoffs by 649% last year,
              which is the highest it has been in decades. A friend of mine showed me a video recently explaining its affect on finding a job now, and
              things to focus on now if you're a recent grad trying to find a job. Its pretty interesting, I recommned giving it a watch! <br/><br/>

              <a href='https://www.youtube.com/watch?v=Kte-t1pQQ3I'>https://www.youtube.com/watch?v=Kte-t1pQQ3I</a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Card>
  )
}

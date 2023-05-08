import React from 'react'
import { Card } from 'flowbite-react';

export default function ExperienceComponent() {
  return (
    <Card id = "experience" className='m-2 sm:m-4 md:m-5 lg:m-7 xl:m-10'>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Tech Experience
      </h5>

      <Card className=''>
        <img src='/images/Leaside.png' className='w-20 h-20 mr-4'/>

        <div>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Highschool</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            I first started programming in my highschool's Intro to CS class. Ever since my first python HelloWorld program,
            I've always had an inclination towards programming. Throuhout my time, in highschool, these were my most notable 
            experiences:
          </p>
          <br/>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <ul className='list-disc list-inside'>
              <li>Python3, Java, RobotC, VEXCode, Processing.py, Processing.java</li>
              <li>VEX Robotics Driver and Head Builder, VEX World's Robotics Qualifier</li>
              <li>Learned about OOP design concepts including (but not limitted to) Abstraction, Encapsulation, Inheritance and Polymorphism</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className='m-4'>
        <img src='/images/carleton.png' className='w-20 h-20 mr-4'/>

        <div>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">University</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            I was accepted to Carleton University in my senior year of highschool, and was awarded two scholarships from them, an Entrance scholarship,
            and the Computer Science Excellence scholarship. Below are just some of the most relevant topics I've studied throughout my degree:
          </p>
          <br/>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <ul className='list-disc list-inside'>
              <li>OOP design patters</li>
              <li>Web development</li>
              <li>Software development (Agile, traceability, UML, etc)</li>
              <li>Operating systems and lower level languages</li>
              <li>Abstract Data structures</li>
              <li>Functional programming in Haskell</li>
              <li>Logical programming in Prolog</li>
              <li>Good UI/UX development</li>
            </ul> 
          </div>
        </div>
      </Card>

      <Card className='m-4'>
        <img src='/images/teaching.png' className='w-20 h-20 mr-4'/>
        <div>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Teaching Programming</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Throughout my undergrad, and before I began working as a Software Developer I took a several jobs teaching programming.
            I've taught with pre-set curriculums, and I've also taught with material I've made myself.
          </p>
          <br/>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <ul className='list-disc list-inside'>
              <li>Taught python, java and web development</li>
              <li>Created practice problems</li>
              <li>Created slides</li>
              <li>Taught remotely</li>
              <li>Taught in-person</li>
              <li>Past experience at <a href='https://alphacoding.com/'>Alpha Coding</a></li>
              <li>Past experience at <a href='https://www.nicksmethod.com/'>Nick's Method</a></li>
            </ul> 
          </div>
        </div>
      </Card>

      <Card className='m-4'>
        <img src='/images/levelAccess.jpg' className='w-20 h-20 mr-4'/>

        <div>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Full-stack Engineer Intern at Level Access</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <a href='https://www.levelaccess.com/'>Level Access</a>, at the time eSSENTIAL Accessibility, is a tech accessibility company. My role required me to work on their 
            main application, which could scan websites and give them a scoring, and detailed feedback on how, and where their website
            was failing to meet WCAG and a11y (among others) rules.
          </p>
          <br/>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <ul className='list-disc list-inside'>
              <li>Developing  features in a MEAN tech stack</li>
              <li>Reviewing Pull Requests (PRs) of other developers</li>
              <li>Working in an Agile team, participating in scrum meetings, and feasibility meetings, requiring effective communication skills</li>
              <li>Fixing front-end and back-end bugs and tech-dept issues</li>
              <li>Mitigating performance issues</li>
              <li>Writing unit tests</li>
              <li>Refactoring code, enforcing best coding practices</li>
              <li>Enabling and adjusting linting rules</li>
              <li>Creating and writing up tickets for fellow developers to address</li>
              <li>Work with version control on BitBucket</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className='m-4'>
        <img src='/images/lume.png' className='w-20 h-20 mr-4'/>

        <div>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Software Developer Intern Lume</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <a href='https://mylume.ca/'>Lume</a> is a Ed-tech start-up, whose purpose is to connect tutors, to students and vise-versa. My role, 
            in this start up is primarily as a front-end developer, but also encompasses design, creating stories, sprint planning, and just general
            software infrastructure.
          </p>
          <br/>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <ul className='list-disc list-inside'>
              <li>AWS</li>
              <li>React.js</li>
              <li>Tailwind</li>
              <li>Creating stories</li>
              <li>Contributing to design figmas and other diagrams</li>
              <li>Participate in tech discussions</li>
              <li>Utilize git development features: Projects, issues, milestones, labels</li>
            </ul>
          </div>
        </div>
      </Card>
    </Card>
  )
}

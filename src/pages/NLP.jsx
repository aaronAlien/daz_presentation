import React from "react";
import { Link } from "react-router-dom";
import bot from "../assets/bot.jpg";

const NLP = () => {
  const projects = [
    {
      id: 1,
      title: "generate text & dataset. create chatbot.",
      description: (
        <>
          <ul className='list-disc list-outside ml-4 space-y-6 italic mt-6'>
            <li>
              Default dataset with SQL
            </li>
            <li>Intent classifier</li>
            <li>Search for content and suggestions with {' '}
            <a
                href='https://developers.google.com/youtube/v3'
                target='_blank'
                className='text-indigo-700 hover:opacity-80 transition duration-300 ease-in-out'
              >
                Youtube API
              </a>
            </li>
              <li>
              <a
                href='https://rsvp.withgoogle.com/events/google-generative-ai-intensive'
                target='_blank'
                className='text-indigo-700 hover:opacity-80 transition duration-300 ease-in-out'
              >
                Further learning.
              </a>
            </li>
           
          </ul>
        </>
      ),
    },
    { id: 2,
      title: '',
      description: (
        <>
          <img src={bot} alt='bot' className='object-cover mx-auto w-full h-auto rounded-md' />
        </>
      )
},
  ];

  return (
    <div>
      <h1 className='font-courier-prime uppercase text-center text-2xl lg:text-5xl font-bold mb-6'>
        # natural language processing #
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-black rounded-lg shadow-xl overflow-hidden max-h-auto'
          >
            <div className='p-6'>
            <Link
                to={`/NLP/project/${project.id}`}
                className='cursor-pointer hover:opacity-50 transition duration-500 ease-in-out'
              >
              <h2 className='text-2xl font-courier-prime font-semibold space-y-8 text-gray-200 uppercase'>
                {project.title}
              </h2>
              </Link>
              <ul className='text-2xl font-courier-prime text-gray-200 mb-4'>
                {project.description}
              </ul>
                <p className="text-2xl font-courier-prime text-gray-200">
                  <a href={project.video}>{project.link}</a>
                </p>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute -bottom-16 -z-8 left-0 lg:left-16 max-w-[60%] p-0'>
        <h1 className='text-12rem font-ruthie tracking-tight opacity-80 text-blue-800'>
          NLP
        </h1>
      </div>

    </div>
  );
};

export default NLP;

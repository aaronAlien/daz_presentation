import React from "react";
import { Link } from "react-router-dom";
import Video from "../components/Video";
import download from '../assets/download.png'

import botrun from "../assets/bot_run.mov";

const NLP = () => {
  const projects = [
    {
      id: 1,
      title: "generate text & dataset. create chatbot.",
      description: (
        <>
          <ul className='list-disc list-inside space-y-6 italic mt-6'>
            <li>
              bot - Create datasets with SQL and bot learning from input.
            </li>
            <li>bot - Intent classifier </li>
            <li>Review class material.</li>
            <li>
              <a
                href='https://rsvp.withgoogle.com/events/google-generative-ai-intensive'
                target='_blank'
                className='hover:text-blue-600 transition duration-300 ease-in-out'
              >
                Further learning.
              </a>
            </li>
           
          </ul>
        </>
      ),
    },
    { id: 2, video: 'https://www.youtube.com/embed/de0c0-a7SK0?si=Tm9_bmP1DfZtOXPL&amp;controls=0'
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
            className='bg-black rounded-lg shadow-xl overflow-hidden max-h-min'
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
                <iframe width="560" height="315" src={project.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute -bottom-16 z-0 left-0 lg:left-16 max-w-[60%] p-0'>
        <h1 className='text-12rem font-ruthie tracking-tight opacity-80 text-blue-800'>
          NLP
        </h1>
      </div>

    </div>
  );
};

export default NLP;

import React from "react";
import { Link } from "react-router-dom";
import preview from "../assets/coffee_preview.jpg";

const WebDev = () => {
  const projects = [
    {
      id: 1,
      title: ".",
      description: (
        <>
          <ul className='list-disc list-inside space-y-6 italic mt-6'>
            <li>Importance of web accessibility for all.</li>
            <li>Semantic HTML.</li>
            <li>
              <a
                href='https://born2root.github.io/Fast-Font/'
                target='_blank'
                className='hover:text-blue-600 transition duration-300 ease-in-out'
              >
                FastFont
              </a>{" "}
              and{" "}
              <a
                href='https://opendyslexic.org/'
                target='_blank'
                className='hover:text-blue-600 transition duration-300 ease-in-out'
              >
                OpenDyslexic
              </a>.
            </li>
            <li>
              <a href="https://toolness.github.io/accessible-color-matrix/" target='_blank' className='hover:text-blue-600 transition duration-300 ease-in-out'>
                Colour Palette
              </a>.
            </li>
          </ul>
        </>
      ),
    },
      { id: 2, image: preview },
  ];

  return (
    <div className='mx-auto'>
      <h1 className='font-courier-prime uppercase text-center text-2xl lg:text-5xl font-bold mb-12'>
        /* html - css - javascript - accessibility */
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-black rounded-lg max-h-min shadow-xl overflow-hidden">
            <div className="p-6">
              <ul className="text-2xl font-courier-prime text-gray-200 mb-4">{project.description}</ul>
              <Link 
                to={`/webdev/project/${project.id}`}
                className="cursor-pointer hover:opacity-50 transition duration-500 ease-in-out"
              >
                <img
                  src={project.image}
                  className='object-contain mx-auto w-fit rounded-md'
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute -bottom-16 -z-8 left-0 lg:left-16 max-w-[60%] p-0'>
        <h1 className='text-12rem font-ruthie tracking-tight opacity-80 text-blue-800'>
          WEB
        </h1>
      </div>
    </div>
  );
};

export default WebDev;



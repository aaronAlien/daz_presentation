import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  // Navbar sections similar to the image
  const navSections = [
    {
      title: "WEB DEV",
      path: "/webdev",
      description:
        "Website structure. Accessible styling, formatting and interaction.",
    },
    {
      title: "DATA SCI",
      path: "/datasci",
      description:
        "Data analysis and visualisation. Analysing a datasets. Working with web APIs.",
    },
    {
      title: "NLP",
      path: "/nlp",
      description:
        "Stemming, Lemmatisation, classification, regression, vectors, ML...",
    },
  ];

  return (
    <nav className='w-full bg-transparent text-gray-800 font-courier-prime relative'>
      <div className='flex flex-wrap flex-col lg:flex-row justify-between items-start pl-8 lg:px-16'>
        {/* Header on the left */}
        <div className='py-4'>
          <Link
            to={"/"}
            className='cursor-pointer hover:opacity-50 transition duration-700 ease-in-out'
          >
            <h1 className='text-4xl font-courier-prime text-left font-bold leading-16 tracking-widest hover:text-6xl hover:opacity-50 transition duration-500 ease-in-out'>
              AARON
              <br />
              SHAKESPEARE
            </h1>
          </Link>
        </div>

        {/* Navigation on the right */}
        <div className='flex-1 flex justify-end'>
          <div className='grid grid-cols-3 gap-2 lg:py-4 max-w-4xl text-center lg:text-left'>
            {navSections.map((section, index) => (
              <div key={index} className='flex flex-col lg:py-2 px-2'>
                <NavLink
                  to={section.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-700 uppercase text-2xl lg:text-4xl mb-2"
                      : "text-blue-600 hover:text-indigo-700 font-semibold uppercase text-2xl lg:text-4xl mb-2"
                  }
                >
                  {section.title}
                </NavLink>

                {section.description && (
                  <p className='hidden lg:block text-base lg:text-xl leading-tight mt-1 text-gray-600'>
                    {section.description.split("\n").map((line, i) => (
                      <span key={i} className='block'>
                        {line}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

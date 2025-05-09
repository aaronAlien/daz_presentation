import React from 'react'
import { Link } from 'react-router-dom'
import download from '../assets/download.png'

const DataSci = () => {
  const projects = [
    { id: 1, title: "create datasets from Spotify API and Android", description: (
      <>
        <ul className='list-disc list-outside ml-4 space-y-6 italic mt-6'>
          <li><a href="https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks" target='_blank' className='text-indigo-700 hover:opacity-80 transition duration-300 ease-in-out'>Spotify Web API</a></li>
          <li>Web scraping to fill in missing data</li>
          <li><a href="https://developer.android.com/tools/adb" target='_blank' className='text-indigo-700 hover:opacity-80 transition duration-300 ease-in-out'>Android Dev Tools</a></li>
          <li>Finding creative ways to visualise data</li>
          </ul>
          </> 
          )},
    { id: 2, image: download },
  ]

  return (
    <div>
      <h1 className='font-courier-prime uppercase text-center text-2xl lg:text-5xl font-bold mb-6'>
        ''' python - data analysis - api's '''
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-black rounded-lg max-h-min shadow-xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-courier-prime font-semibold space-y-8 text-gray-200 uppercase">{project.title}</h2>
              <ul className="text-2xl font-courier-prime text-gray-200 mb-4">{project.description}</ul>
              <Link 
                to={`/datasci/project/${project.id}`}
                className="cursor-pointer hover:opacity-50 transition duration-500 ease-in-out"
              >
                <img
                  src={project.image}
                  className='object-contain mx-auto max-h-auto w-fit rounded-md'
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute -bottom-16 -z-8 left-0 lg:left-16 max-w-[60%] p-0'>
        <h1 className='text-12rem font-ruthie tracking-tight opacity-80 text-blue-800'>
          DATA
        </h1>
      </div>

    </div>
  )
}

export default DataSci

import React from 'react'
import { Link } from 'react-router-dom'
import download from '../assets/download.png'
import cloud from '../assets/wordcloud_genres_2.png'
import cloud2 from '../assets/wordcloud_top_artists_1.png'
import new3 from '../assets/new_3.png'
import new4 from '../assets/new_4.png'
import topart from '../assets/bar_top_artists_popularity.png'
import new1 from '../assets/new_1.png'
import clips from '../assets/clips.mp4'
import VideoVertical from '../components/nav/VideoVertical'

const DataSciProject = () => {
  const projects = [
    { id: 4, title: "then" },
    { id: 4, title: "now" },
    { id: 3, image: cloud },
    { id: 4, image: new3 },
    { id: 5, image: cloud2 },
    { id: 6, image: new4 },
    { id: 7, image: topart },
    { id: 8, image: new1 },
  ]

  return (
    <div>
      <h1 className='font-courier-prime bg-black text-gray-200 rounded-lg uppercase text-center text-2xl lg:text-5xl font-bold my-6'>
        # comparing ouputs 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {projects.map(project => (
          <div key={project.id} className="bg-black shadow-xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-courier-prime font-semibold space-y-8 uppercase text-center text-gray-200 ">{project.title}</h2>
                <img
                  src={project.image}
                  className='object-contain mx-auto w-fit rounded-md'
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}

export default DataSciProject
import React from 'react'

const Video = ({ src }) => {
  return (
<div className="horizontal-video-container mx-auto w-full">
  <video
    className="w-full h-auto object-contain bg-black rounded-lg"
    controls
    playsInline
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
  )
}

export default Video
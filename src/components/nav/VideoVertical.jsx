import React from 'react'

const VideoVertical = ({ src }) => {
  return (
    <div className="vertical-video-container mx-auto" style={{ maxWidth: '450px' }}>
      <video
        className="w-full h-[80vh] object-contain bg-black rounded-lg"
        controls
        playsInline
              >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoVertical
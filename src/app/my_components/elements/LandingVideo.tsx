import React, { useState } from 'react'
import Loading from '../../gallery/loading'

const LandingVideo = () => {
  const [isLoading, setIsLoading] = useState(true)
  const handleVideoLoad = () => {
    setIsLoading(false)
  }
    
  return (
    <div>
      <div className="w-full h-[calc(100vh-5rem)] bg-[var(--primary-white)] p-5 rounded-md overflow-clip">
        {isLoading ? <Loading /> : null}
        <iframe
          className="w-full h-full rounded-md"
          onLoad={handleVideoLoad}
          src={`https://www.youtube.com/embed/_H9tByQyBv8?loop=1&playlist=_H9tByQyBv8&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0`}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div> 
    </div>
  )
}

export default LandingVideo

import React, { useRef } from 'react';
import './carrousel.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'


const Carrousel = ({item, small}) => {

    const carrousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrousel.current.scrollLeft -= carrousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carrousel.current.scrollLeft += carrousel.current.offsetWidth
    }

  return (
    <div className='carrousel_container'>
        
        <button onClick={handleLeftClick}>
            <AiOutlineArrowLeft className='scroll'/>
        </button>
        
        {
        small?
         <div className='videos_section_small' ref={carrousel}>
            {item.map((video, key) => (
                <div className='video_item'>
                    <img src={video.snippet.thumbnails.medium.url} />
                    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
                        <h5>{video.snippet.title}</h5>
                    </a>
                    <span>
                    <a href={`https://www.youtube.com/channel/${video.snippet.channelId}`} target="_blank">
                        <h6>{video.snippet.channelTitle}</h6>
                    </a>
                          
                    </span>
                            
                </div>
            ))}
         </div>
        :
            <div className='videos_section' ref={carrousel}>
                {item.map((video, key) => (
                    <div className='video_item'>
                        <img src={video.snippet.thumbnails.medium.url} />
                        <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
                            <h5>{video.snippet.title}</h5>
                        </a>
                        
                        <span>
                            <a href={`https://www.youtube.com/channel/${video.snippet.channelId}`} target="_blank">
                              <h6>{video.snippet.channelTitle}</h6>
                           </a>
                        </span>
                                
                    </div>
                ))}
             </div>
        }
        
        
            
        <button onClick={handleRightClick}>
            <AiOutlineArrowRight className='scroll' />
        </button>
            
        
    </div>
  )
}

export default Carrousel
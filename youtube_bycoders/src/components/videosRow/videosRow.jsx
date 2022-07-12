import React from 'react';
import './videosRow.css';

const VideosRow = ({item}) => {

    // <h4>Vídeo: {item.title}</h4>
    //Channel: {item.channelTitle}
  return (
    <div>

    
        <div className='video_item'>
            <div>       
                <img src={item.thumbnails.medium.url} alt={item.title} className='xi'/>     
            </div>
            <h4>{item.title}</h4>
            <h7>{item.channelTitle}</h7>
        </div>
    </div>
  )
}

export default VideosRow
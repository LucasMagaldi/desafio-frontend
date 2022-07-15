import React, { useEffect, useState } from 'react';
import mainAPI from '../../services/axiosApi';
import failedAuth from '../../assets/img/authenticate.svg'

import './subscription.css'


const Subscription = ({subscriptions, authenticate}) => {
  
  return (
    <>
      {
        authenticate ?
        <div className='container_auth_failed'>
          <div className='failed_section'>
            <img src={failedAuth} alt="" />
            <h7>To view your subscriptions You must be Authenticate</h7>
          </div>  
        </div>    
        :

        <div className='channels_section'>
            {subscriptions.map((item, key) => (
              <div className='channels_item'>
                 <a href={`https://www.youtube.com/channel/${item.snippet.resourceId.channelId}`} target="_blank">
                   <img src={item.snippet.thumbnails.medium.url} className="channel_picture"/>
                 </a>
                  
                  <div className='channel_info'>
                  <a href={`https://www.youtube.com/channel/${item.snippet.resourceId.channelId}`} target="_blank">
                    <h2>{item.snippet.title}</h2>
                  </a>      
                    <h4>{item.snippet.channelTitle}</h4>
                    <p>{item.snippet.description}</p>
                  </div>
              </div>
            ))}
        </div>
      }
    </>    
    
  )
}

export default Subscription
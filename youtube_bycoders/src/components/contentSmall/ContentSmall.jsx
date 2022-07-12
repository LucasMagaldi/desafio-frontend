import React, { useEffect, useContext } from 'react';
import { ContentContext } from '../../contexts/ContentContext';
import { SidebarContext } from '../../contexts/SidebarContext';
import { Feature, Carrousel } from '../index';  

import './contentSmall.css'

const ContentSmall = () => {

    const { 
        scienceVideos,
        getScience,
        getCategories,
        getSports,
        getComedy,
        getPopularVideos,
        sportsVideos,
        comedyVideos,
        popularVideos 
    } = useContext(ContentContext);

    useEffect(() => {
        const loadPopular = async () => {
          await getPopularVideos();
          await getCategories();
          await getComedy();
          await getSports();
          await getScience();
        }
  
        loadPopular();
        
    }, [])

  return (
    <div className='content_container_small'>
            <div className='highlights_small'>       
              <Feature />              
            </div>
                        
              <Carrousel item={popularVideos} small={true} />  
              <Carrousel item={comedyVideos} small={true}/>             
              <Carrousel item={sportsVideos} small={true}/>               
              <Carrousel item={scienceVideos} small={true}/>                        
            
    </div>
  )
}

export default ContentSmall
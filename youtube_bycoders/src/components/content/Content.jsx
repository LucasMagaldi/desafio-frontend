import React, { useEffect, useContext } from 'react';
import { ContentContext } from '../../contexts/ContentContext';
import { SidebarContext } from '../../contexts/SidebarContext';
import { authenticateOauth } from '../../services/Authentication';
import { Feature, Carrousel, ContentSmall } from '../index'

import './content.css';

const Content = () => {

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
  const { sidebarExtend } = useContext(SidebarContext);

  const loadPopular = () => {
        getPopularVideos();
        getCategories();
        getComedy();
        getSports();
        getScience();
        }

        

  useEffect(() => {
      loadPopular();
      authenticateOauth();
      
  }, [])
 
  return (
    <>
    {
      !sidebarExtend ?
        <div className='content_container_full'>
            <div className='highlights_full'>       
              <Feature />              
            </div>
                        
              <Carrousel item={popularVideos} small={false} />  
              <Carrousel item={comedyVideos} small={false}/>             
              <Carrousel item={sportsVideos} small={false}/>               
              <Carrousel item={scienceVideos} small={false}/>                        
            
        </div>
      :  
            <ContentSmall />      
    } 
    </>
    
  )
}

export default Content
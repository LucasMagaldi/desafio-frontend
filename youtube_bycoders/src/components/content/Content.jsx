import React, { useEffect, useContext } from 'react';
import { ContentContext } from '../../contexts/ContentContext';
import { SidebarContext } from '../../contexts/SidebarContext';
import { Feature, Carrousel } from '../index'

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
         <div className='content_container_small'>
            <div className='highlights_small'>       
              <Feature />              
            </div>
                        
              <Carrousel item={popularVideos} small={false} />  
              <Carrousel item={comedyVideos} small={false}/>             
              <Carrousel item={sportsVideos} small={false}/>               
              <Carrousel item={scienceVideos} small={false}/>                        
            
        </div>     
    } 
    </>
    
  )
}

export default Content
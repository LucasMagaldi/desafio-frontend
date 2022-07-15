import React, { useContext, useEffect } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import { SearchContext } from '../../contexts/SearchContext';
import './searchList.css';


const SearchList = () => {

  const { sidebarExtend } = useContext(SidebarContext);
  const { getSearchResult, searchItems } = useContext(SearchContext);

  const Video = async (videoId) => {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }

  useEffect(()=> {
    const LoadVideos = async () => {
      await getSearchResult();
      console.log(searchItems)
    }
    
    LoadVideos();

  }, []);


  return (
    <div>
      {
        !sidebarExtend ?     
        <div className='search_container'>
          {searchItems.map((item, key) => (
            <div className='search_item'>
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} onClick={Video(item.id.videoId)} />
              <div className='items_information'>
                <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank" rel="noopener noreferrer">
                    <h2>{item.snippet.title}</h2>
                </a>
                <h4>{item.snippet.channelTitle}</h4>
                <p>{item.snippet.description}</p>
              </div>
              
            </div>
            
          ))}
        </div>
        :
        <div className='search_container_small'>
          {searchItems.map((item, key) => (
            <div className='search_item'>        
                <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} onClick={Video(item.id.videoId)} />             
              <div className='items_information'>
                <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank" rel="noopener noreferrer">
                    <h2>{item.snippet.title}</h2>
                </a>              
                <h4>{item.snippet.channelTitle}</h4>
                
                <p className='description_video'>{item.snippet.description}</p>          
             
                
              </div>         
            </div>
            
          ))}
        </div>
      }
    </div>
  )
}

export default SearchList
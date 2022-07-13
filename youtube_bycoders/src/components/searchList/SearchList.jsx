import React, { useContext, useEffect } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import { SearchContext } from '../../contexts/SearchContext';
import './searchList.css';


const SearchList = () => {

  const { sidebarExtend } = useContext(SidebarContext);
  const { getSearchResult, searchItems, getSearchValue } = useContext(SearchContext)

  useEffect(()=> {
    const LoadVideos = async () => {
      await getSearchValue()
      await getSearchResult();
      console.log(searchItems)
    }
    
    LoadVideos();

  }, [])

  return (
    <div>
      {
        !sidebarExtend ?     
        <div className='search_container'>
          {searchItems.map((item, key) => (
            <div className='search_item'>
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
              <div className='items_information'>
                <h2>{item.snippet.title}</h2>
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
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
              <div className='items_information'>
                <h2>{item.snippet.title}</h2>
                <h4>{item.snippet.channelTitle}</h4>
                { 
                window.innerWidth <= 750 ?
                  <div>.......</div>
                :
                <p className='description_video'>{item.snippet.description}</p>
              }
                
              </div>         
            </div>
            
          ))}
        </div>
      }
    </div>
  )
}

export default SearchList
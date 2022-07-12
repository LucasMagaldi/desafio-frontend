import React from 'react';
import { SearchList, Header, SideBar } from '../../components';
import {SidebarContextProvider, ContentContextProvider, SearchContextProvider} from '../../contexts/index';

const SearchPage = () => {
  return (
    <SidebarContextProvider>
      <SearchContextProvider>
        <Header />
        <div className='searchPage_container'>
            <SideBar />          
            <SearchList />                 
        </div>
        </SearchContextProvider> 
    </SidebarContextProvider>
  )
}

export default SearchPage
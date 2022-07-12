import React, {useRef} from 'react';
import {SidebarContextProvider, ContentContextProvider} from '../../contexts/index';
import { Header, SideBar, Content } from '../../components/index';

import './home.css'

const Home = () => {


  return (
 
      <SidebarContextProvider >
          <Header />  
          <div className='container_content'>
            <SideBar />
            <ContentContextProvider>
              <Content />
            </ContentContextProvider>   
          </div>
          
      </SidebarContextProvider>
      
    )
}

export default Home
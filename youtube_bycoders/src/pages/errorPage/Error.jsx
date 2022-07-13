import React from 'react';
import { Header, SideBar } from '../../components';
import { SidebarContextProvider } from '../../contexts';
import notFound from '../../assets/img/not_found.svg'

import './error.css'

const Error = () => {
  return (

    <SidebarContextProvider>
      <Header />
      <div className='error_container'>
          <SideBar />
          <div className='error_section'>
              <img src={notFound} alt="page not founded" />
              <h7>Page Not found. Please provide a valid URL</h7>
          </div>
      </div>
    </SidebarContextProvider>
    
  )
}

export default Error
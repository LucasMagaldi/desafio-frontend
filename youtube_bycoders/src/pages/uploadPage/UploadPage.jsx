import React from 'react';
import { SidebarContextProvider } from '../../contexts/index';
import { Header, SideBar, Upload } from '../../components';

import './uploadPage.css'


const UploadPage = () => {
  return (
    <SidebarContextProvider>
        <Header />
        <div className='container_content '>
            <SideBar />
            <Upload />
        </div>
    </SidebarContextProvider>
  )
}

export default UploadPage
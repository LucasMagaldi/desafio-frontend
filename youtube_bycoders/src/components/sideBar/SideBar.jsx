import React, { useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { AiFillHome } from 'react-icons/ai';
import { AiFillVideoCamera } from 'react-icons/ai';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineUpload } from  'react-icons/ai';
import './sideBar.css'

const SideBar = () => {

  const { sidebarExtend ,setSidebarExtend} = useContext(SidebarContext);
  const { authenticate } = useContext(AuthenticationContext);

  return (
    <div className='sidebar_container'>
      {
        sidebarExtend ? 
        <div className='sidebar_items'>
            <a href="/" className='sidebar_links'>
              <AiFillHome />
              <p>Home</p>
            </a>
            <a href="/search" className='sidebar_links'>
              <AiFillVideoCamera />
              <p>Videos</p>
            </a>
              <a href="" className='sidebar_links'>
                <AiOutlineFundProjectionScreen />
                <p>Channels</p>
              </a>
            
            
            <a href='subscription/list' className='sidebar_links'>
              <AiOutlineUserAdd />
              <p>Subscription</p>
            </a>
            <a href='/post/upload' className='sidebar_links'>
              <AiOutlineUpload />
              <p>Upload</p>
            </a>
          </div>
          :
          <div className='sidebar_items_closed'>
            <a href="/" className='item_icons'>
              <AiFillHome />
              <p>Home</p>
            </a>
            <a href="/search" className='item_icons'>
              <AiFillVideoCamera />
              <p>Videos</p>
            </a>
            <a href="" className='item_icons'>
              <AiOutlineFundProjectionScreen />
              <p>Channels</p> 
            </a>
            <a href='subscription/list' className='item_icons'>
              <AiOutlineUserAdd />
              <p>Subscription</p>           
            </a>
            <a href='/post/upload' className='item_icons'>
              <AiOutlineUpload />
              <p>Upload</p>             
            </a>
          </div>
      }
    </div>
  )
}

export default SideBar
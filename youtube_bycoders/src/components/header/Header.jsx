import React, { useContext, useState,useEffect } from 'react';
import { SearchContextProvider } from '../../contexts';
import { SidebarContext } from '../../contexts/SidebarContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Search, SignIn } from '../index';
import { FiMenu } from 'react-icons/fi';
import {OAuthGoogle} from '../../services/axiosApi'

import './header.css';


const Header = () => {

  
  const { OpenSideBar} = useContext(SidebarContext);
  const { loadToken, signOff } = useContext(AuthenticationContext);
  const [authenticate, setAuthenticate] = useState(false);
  const userName = localStorage.getItem("userName");
  const userPhoto = localStorage.getItem("userPicture");

  const getToken = async () => {     
       await OAuthGoogle();
  }

  const Auth = async () => {
      await getToken();
  }

  const getSearch = async () => {
    window.location.href  = '/'
  }

  useEffect(() => {
      if(localStorage.getItem("withCredentials") == "true") setAuthenticate(true)
      
  },[])

  return (
    <SearchContextProvider>
      <div className='header_container'>
        <div className='logo'>
          <div id='menu_icon' onClick={OpenSideBar}>
             <FiMenu  />
          </div>
          <h2 className='main_logo' onClick={getSearch}>You<span className='red_letter_logo'>Tube</span></h2>       
        </div>
        <div>
          <Search 
            type="text"
            placeholder="Find videos"
            name="search"
          />  
        </div>
          
        <div id='authentication'>
          {
           !userName ?
           <div className='oauth_section'>
             <SignIn hidden={authenticate} loadToken={loadToken} Auth={Auth}/>        
           </div>              
            :
            <div className='user_authenticated'>
              <img src={userPhoto} alt={userName} />
              <h5>Wellcome, {userName}</h5>

              <button onClick={signOff} className="signs_buttons">| Sign Off</button> 
            </div>
          }
                
        </div>
    </div>  
    </SearchContextProvider>
    
  )
}

export default Header
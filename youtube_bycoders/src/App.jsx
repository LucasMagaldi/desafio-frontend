import React, { useEffect, useContext, useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home';
import { SearchPage, ChannelsPage, UploadPage, Error } from './pages/index'
import { AuthenticationContext } from './contexts/AuthenticationContext';

const App = () => {
  
  const { GoogleAuth } = useContext(AuthenticationContext);
  const [credentials, setCredentials] = useState(false)

  useEffect(() => {
    
      const currentPath = window.location.href;
      if( currentPath.length <=50 ) {
        document.getElementById("start_session_btn").style.display = "none"
        localStorage.setItem("withCredentials", false);
      }else{
        localStorage.setItem("withCredentials", true);
        document.getElementById("signInBtn").style.display = "none"
      }

    GoogleAuth();
  
  }, [])

  
  return (
    
      <BrowserRouter>      
          <Routes>
            <Route path='/' element={<Home />} />  
            <Route path='/search' element={<SearchPage />}/>  
            <Route path='/channels' element={<ChannelsPage/>}/>
            <Route path='/post/upload' element={<UploadPage/>} />
            <Route path='*' element={<Error/>} />
          </Routes>       
      </BrowserRouter>
  
    
  )
}

export default App
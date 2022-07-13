import React, { useEffect, useContext, useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home';
import { SearchPage, SubscriptionPage, UploadPage, Error } from './pages/index'
import { AuthenticationContext } from './contexts/AuthenticationContext';

const App = () => {
  
  const { GoogleAuth } = useContext(AuthenticationContext);
  const [credentials, setCredentials] = useState(false)

  useEffect(() => {
    
      const currentPath = window.location.href;
      if( currentPath.length <=50 ) {
      
        localStorage.setItem("withCredentials", false);
      }else{
        localStorage.setItem("withCredentials", true);
       
      }

    GoogleAuth();
  
  }, [])

  
  return (
    
      <BrowserRouter>      
          <Routes>
            <Route path='/' element={<Home />} />  
            <Route path='/search' element={<SearchPage />}/>  
            <Route path='/channel/list' element={<SubscriptionPage/>}/>
            <Route path='/post/upload' element={<UploadPage/>} />
            <Route path='*' element={<Error/>} />
          </Routes>       
      </BrowserRouter>
  
    
  )
}

export default App
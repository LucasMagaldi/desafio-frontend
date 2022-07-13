import React, { useEffect, useContext, useState } from 'react';
import { mainAPIOauth } from '../../services/axiosApi';
import { SidebarContextProvider } from '../../contexts/index';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Subscription, Header, SideBar, Content } from '../../components/index';

import './subscription.css'

const SubscriptionPage = () => {

    const [authenticate, setAuthenticate] = useState(false)
    const [subscriptions, setSubscriptions] = useState([]);

    const getChannels = async() => {
      const id = localStorage.getItem("userId")
        try {
          const res = await mainAPIOauth.get('/subscriptions', {
            params: {
                channelId: id,
                maxResults: 50,
              }
        });
        console.log(res.data.items)
        setSubscriptions(res.data.items)
        } catch (error) {
          setAuthenticate(true)
          
        }
        
    }

    useEffect(()=> {
        const loadChannels = () => {
             getChannels()
        }

        loadChannels();
    },[]) 

  return (
    <SidebarContextProvider>
      <Header />
      <div className=''>
        <SideBar />
        <Subscription subscriptions={subscriptions} authenticate={authenticate}/>
      </div>
    </SidebarContextProvider>
  )
}

export default SubscriptionPage
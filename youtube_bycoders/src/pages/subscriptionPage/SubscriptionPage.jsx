import React, { useEffect, useContext, useState } from 'react';
import { mainAPIOauth } from '../../services/axiosApi';
import { SidebarContextProvider } from '../../contexts/index';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { Subscription, Header, SideBar, Content } from '../../components/index';

import './subscription.css'

const SubscriptionPage = () => {

    const { authenticate } = useContext(AuthenticationContext);
    const [subscriptions, setSubscriptions] = useState([]);

    const getChannels = async() => {
      const id = localStorage.getItem("userId")
        const res = await mainAPIOauth.get('/channels', {
            params: {
                id: id,
                maxResults: 20,
              }
        });
        console.log(res.data.items)
        setSubscriptions(res.data.items)
        
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
      <div className='subscription_container'>
        <SideBar />
        <Subscription subscriptions={subscriptions}/>
      </div>
    </SidebarContextProvider>
  )
}

export default SubscriptionPage
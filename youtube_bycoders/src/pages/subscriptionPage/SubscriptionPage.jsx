import React, {useEffect, useContext} from 'react';
import mainAPI, {mainAPIOauth} from '../../services/axiosApi';
import {SidebarContextProvider} from '../../contexts/index';
import {AuthenticationContext} from '../../contexts/AuthenticationContext';
import { Channels,Header, SideBar, Content } from '../../components/index';

const SubscriptionPage = () => {

    const { authenticate } = useContext(AuthenticationContext);

    const getChannels = async() => {
      const id = localStorage.getItem("userId")
        const res = await mainAPIOauth.get('/subscriptions', {
            params: {
                channelId: id,
                maxResults: 20,
              }
        });
        console.log(res)
    }

    useEffect(()=> {
        const loadChannels = async() => {
            await getChannels()
        }

        loadChannels();
    })

  return (
    <SidebarContextProvider>
      <Header />
      <div>
        <SideBar />
      </div>
    </SidebarContextProvider>
  )
}

export default SubscriptionPage
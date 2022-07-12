import React, {useEffect, useContext} from 'react';
import mainAPI from '../../services/axiosApi';
import {SidebarContextProvider} from '../../contexts/index';
import {AuthenticationContext} from '../../contexts/AuthenticationContext';
import { Channels,Header, SideBar, Content } from '../../components/index';

const ChannelsPage = () => {

    const { authenticate } = useContext(AuthenticationContext);

    const getChannels = async() => {
        const res = await mainAPI.get('/channels', {
            params: {
                id: "UCeY0bbntWzzVIaj2z3QigXg",
                maxResults: 12,
              }
        });
    
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
    </SidebarContextProvider>
  )
}

export default ChannelsPage
import React, { useEffect, useState } from 'react';
import mainAPI from '../../services/axiosApi';
import failedAuth from '../../assets/img/authenticate.svg'

import './subscription.css'


const Subscription = ({subscriptions, authenticate}) => {
  
  return (
    <div className='container_auth_failed'>
      {
        authenticate ?
        <div className='failed_section'>
          <img src={failedAuth} alt="" />
          <h7>To view your subscriptions You must be Authenticate</h7>
        </div>    
        :

        <div className=''>
            <h1>channels</h1>
        </div>
      }
        
    </div>
  )
}

export default Subscription
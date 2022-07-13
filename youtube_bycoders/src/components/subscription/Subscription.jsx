import React, { useEffect, useState } from 'react';
import mainAPI from '../../services/axiosApi';

import './subscription.css'


const Subscription = ({subscriptions, authenticate}) => {
  
  return (
    <div className='container'>
      {
        authenticate ?
        <div className=''>
          <h1>You must be Authenticate</h1>
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
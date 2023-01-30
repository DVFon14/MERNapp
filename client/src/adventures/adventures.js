//============== React ==============//

import React from 'react'
import { useLocation } from 'react-router-dom'

//============== Files and Folders imports ==============//

import Banner from './banner2'
import Forms from './forms'

//============== Code ==============//

function Adventures() {
  const location = useLocation();
  const StateID = location.state;
  // console.log("data in adventures is: ", data);

  return (
    <div >
      <Banner />
      <Forms StateID={StateID}/>

      
    </div>
  )
}
export default Adventures
//============== React ==============//

import React from 'react'
import { useLocation } from 'react-router-dom'

//============== Files and Folders imports ==============//

import Banner from './banner2'
import Forms from './forms'

//============== Code ==============//

function Adventures() {
  const location = useLocation(); //passing the useLocation hook
  const StateID = location.state;

  return (
    <div >
      <Banner />
      <br />
      <Forms StateID={StateID}/>
    </div>
  )
}
export default Adventures

//useLocation allows us to pass infomration from one link to another
//in this case we pass the state._id info from /states to /adventures
//to use useLocation we need routes, both use the react-router-dom
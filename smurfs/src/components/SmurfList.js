import React from "react";

import Smurf from './Smurf';

const SmurfsList = props => {
  console.log(props);
  return (
    
    <div>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />
      })}
    </div>
  )
}

export default SmurfsList;
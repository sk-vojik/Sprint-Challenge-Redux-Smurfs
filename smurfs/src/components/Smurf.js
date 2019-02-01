import React from "react"

const Smurf = props => {
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <p>{`Height: ${props.smurf.height} Age: ${props.smurf.age}`}</p>
    </div>
  )
}

export default Smurf;
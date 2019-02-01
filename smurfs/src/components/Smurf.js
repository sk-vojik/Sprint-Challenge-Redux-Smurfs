import React from "react"

const Smurf = props => {
  return (
    <div className="smurf">
      <h3>{props.smurf.name}</h3>
      <p>{`Height: ${props.smurf.height} cm tall`}</p>
      <p>{`Age: ${props.smurf.age} Smurf years old`}</p>
    </div>
  )
}

export default Smurf;
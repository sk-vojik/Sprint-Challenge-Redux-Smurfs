import React from "react"

const Form = (props) => {
  return (
    <div>
      <h2>Add a Smurf!</h2>
      <form>

        <input
          type="text"
          name="name"
          onChange={props.changeHandler}
          placeholder="Name"
          value={props.smurf.name}
        />

        <input
          type="text"
          name="age"
          onChange={props.changeHandler}
          placeholder="Age"
          value={props.smurf.age}
        />

        <input
          type="text"
          name="height"
          onChange={props.changeHandler}
          placeholder="Height"
          value={props.smurf.height}
        />

        <button onClick={props.addNewSmurf}>Add a Smurf!</button>

      </form>
    </div>
  )
}

export default Form;
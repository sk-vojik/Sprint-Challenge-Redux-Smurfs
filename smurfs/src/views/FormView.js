import React from "react"
import { connect } from 'react-redux'
import { addNewSmurf } from "../actions"

import Form from '../components/Form'

class FormView extends React.Component {

  state = {
    smurf: {
      name: '',
      height: '',
      age: '',
    }
  }

  changeHandler = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    })
  }

  addNewSmurf = e => {
    e.preventDefault();
    this.props.addNewSmurf(this.state.smurf);
    this.setState({ 
      smurf: {
        name: '',
        height: '',
        age: '',
      }
    })
  }

  render() {
    return (
      <Form 
        addNewSmurf={this.addNewSmurf}
        changeHandler={this.changeHandler}
        smurf={this.state.smurf}
      />
    )
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addNewSmurf }
)(FormView);

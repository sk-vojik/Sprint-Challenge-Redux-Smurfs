import React from "react"
import { connect } from 'react-redux'

import Form from '../components/Form'

class FormView extends React.Component {

  state = {

  }

  render() {
    return (
      <Form />
    )
  }
}

const mapStateToProps = sate => ({});

export default connect(
  mapStateToProps,
  {}
)(FormView);

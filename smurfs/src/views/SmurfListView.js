import React from "react"
import { connect } from "react-redux";

import SmurfList from '../components/SmurfList'

class SmurfListView extends React.Component {
  

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Smurfs!</h2>
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    )
  }

}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
})


export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfListView);

import React from "react"
import { connect } from "react-redux";

import { getSmurfs } from '../actions'
import SmurfList from '../components/SmurfList'

class SmurfListView extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props);
    return (
      <div className="smurflist-container">
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

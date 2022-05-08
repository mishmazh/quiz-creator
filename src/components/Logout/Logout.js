import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../redux/actions/auth";

class Logout extends React.Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Navigate to={"/"} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(Logout);

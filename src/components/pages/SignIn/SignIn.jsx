import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignIn extends Component {
  componentDidMount() {
    this.props.signIn({
      client_id: '1234',
      client_secret: '1234',
      grant_type: 'password',
      username: 'anatoly@cym.bio',
      password: '1234',
      scope: ['read:suppliers', 'read:retailers'],
    });
  }

  render() {
    return <div>SignIn</div>;
  }
}

export default SignIn;

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};

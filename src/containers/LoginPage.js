import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/userActions';
import dalogo from '../imgs/gpc_logo@2x.png';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div className="form-container">
        <a href='/'><img className='logo-img' src={dalogo} alt=''/></a>
        <a href='/signup'><h3 className='form-heading'>Sign Up</h3></a>
        <h3><u>Login</u></h3>
        <form name="login-form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
            <input type="email" className="email-input" name="email" placeholder='Email' value={email} onChange={this.handleChange} />
            {submitted && !email &&
              <div className="help-block">Email is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <input type="password" className="password-input" name="password" placeholder='Password' value={password} onChange={this.handleChange} />
            {submitted && !password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="form-button">LOGIN</button>
            {loggingIn }
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    loggingIn: state.authentication
  })
}

export default connect(mapStateToProps, { login })(LoginPage)
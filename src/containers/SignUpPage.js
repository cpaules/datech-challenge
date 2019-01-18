import React, { Component } from 'react';
import { connect } from 'react-redux';

import { register } from '../actions/userActions';
import dalogo from '../imgs/gpc_logo@2x.png';

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        email: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.username && user.email && user.password) {
      this.props.register(user);
    }
  }

  render() {
    const { registering  } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="form-container">
        <a href='/'><img className='logo-img' src={dalogo} alt=''/></a>
        <h3><u>Sign Up</u></h3>
        <a href='/login'><h3 className='form-heading'>Login</h3></a>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
            <input type="text" className="form-control" name="username" placeholder='Username' value={user.username} onChange={this.handleChange} />
            {submitted && !user.username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
            <input type="email" className="form-control" name="email" placeholder='Email' value={user.email} onChange={this.handleChange} />
            {submitted && !user.email &&
              <div className="help-block">Email is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
            <input type="password" className="form-control" name="password" placeholder='Password'value={user.password} onChange={this.handleChange} />
            {submitted && !user.password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="form-button">Sign Up</button>
            {registering}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    registering: state.registration
  })
}

export default connect(mapStateToProps, { register })(SignUpPage)
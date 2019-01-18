import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { subscribe } from '../actions/userActions';
import backgroundImg from '../imgs/gpc_hero_image@2x.png';
import logo from '../imgs/gpc_logo_large@2x.png';
import movo from '../imgs/logo_movo@2x.png';
import ww from '../imgs/logo_conair@2x.png';
import tapping from '../imgs/logo_tappingSolution@2x.png';
import tenna from '../imgs/logo_goTenna@2x.png';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailSubcription: '',
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
    const { emailSubcription } = this.state;
    if (emailSubcription) {
      this.props.subscribe(emailSubcription);
    }
  }

  //<img class='login-background-img' src={backgroundImg} alt=''/>
  
  render() {
    const { subscribing } = this.props;
    const { emailSubcription, submitted } = this.state;
    return (
      <div>
        <div className='top-container'>
          <Link className='login-link' to="/login">Login</Link>
          <img className='background-img' src={backgroundImg} alt=''/>
          <img className='logo' src={logo} alt=''/>
          <h1 className='title'>APP DESIGN & DEVELOPMENT AGENCY</h1> 
        </div>
        <div className='about'>
          <h2>WHO WE ARE</h2>
          <p>D & A Technologies is a NYC-based app development firm that works with Fortune 500 brands, leading retailers, funded startups and more to craft digital products and strategies that solve business problems and drive measureable results. <br></br><br></br>We're part of your team. That means working together to meet the business challenges you face. From iOS and Android to emerging technologies like VR, AR and wearables, we do whatever it takes to help you thrive in today's - and tomorrow's - digital ecosystem.</p>
        </div>
        <div className='bg'>
          <div className='apps'>
            <h2>OUR APPS</h2>
            <div className='app-grid'>
              <a href='https://movo.me'><img className='app-logo' src={movo} alt=''/></a>
              <a href='https://itunes.apple.com/us/app/ww-body-analysis-scale-tracker/id1157071126?mt='><img className='app-logo' src={ww} alt=''/></a>
              <a href='https://itunes.apple.com/us/app/the-tapping-solution/id1419815487?mt=8'><img className='app-logo' src={tapping} alt=''/></a>
              <a href='https://gotenna.com'><img className='app-logo' src={tenna} alt=''/></a>
              <h5>Movo</h5>
              <h5>Conair WeightWatchers</h5>
              <h5>Tapping Solution</h5>
              <h5>goTenna</h5>
            </div>
          </div>
        </div>
        <div className='newsletter'>
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <div className='newsletter-form'>
            <form name="form" onSubmit={this.handleSubmit}>
              <div className={'form-group' + (submitted && !emailSubcription ? ' has-error' : '')}>
                <input type="text" className="form-control" name="emailSubcription" placeholder='Your email' value={emailSubcription} onChange={this.handleChange} />
                {submitted && !emailSubcription &&
                  <div className="help-block">Email is required</div>
                }
                <button className="subscribe-button">SUBSCRIBE</button>
                {subscribing}
              </div>
            </form>
          </div>
        </div>
        <div className='footer'>
          <p>Footer</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.authentication
  })
}

export default connect(mapStateToProps, { subscribe })(HomePage)
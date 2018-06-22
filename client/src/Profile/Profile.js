import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
    state = {
        profile: {}
    }
  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        this.saveUser(profile);
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  saveUser = (profile) => {
      fetch('/profile', {
          method: 'POST',
          body: JSON.stringify({
              first_name: profile.given_name,
              last_name: profile.family_name,
              email: profile.email,
              date: profile.updated_at
          }),
          headers: {
              'content-type': 'application/json'
          },
          }).then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
  }

  render() {
      
    const { profile } = this.state;
    console.log(this.props.location.state);
    return (
      <div className="container">
        <div className="profile-area">
          <Panel header="Profile">
            <h1>Hi, {profile.given_name}</h1>
            <img src={profile.picture} alt="profile" />
            <div>
            <div className='user-info'>
              <h5>Name:</h5>
              <p>{profile.given_name} {' '}
                {profile.family_name}</p>
                <hr />
                <h5>Email:</h5>
                <p>{profile.email}</p>
                            <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;

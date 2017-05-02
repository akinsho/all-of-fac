import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import styled from 'styled-components';
import Profiles from './components/Profiles';
import Navbar from './components/navbar';
import Individual from './components/individual';
import { Container, Home, Error } from './components/styledComponents';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister');
  body,html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Love Ya Like A Sister','Helvetica', cursive;
    width: 100%;
    height: 100%;
  }

  *{
    box-sizing: inherit;
    font-family: inherit;
  }
`;

const ErrorButton = styled(Home)`
  font-size: 0.8rem;
  background: whitesmoke;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facProfiles: [],
      member: null,
      redirect: false,
      error: '',
    };
    this.showFAC = this.showFAC.bind(this);
    this.updateMember = this.updateMember.bind(this);
    this.redirect = this.redirect.bind(this);
    this.removeError = this.removeError.bind(this);
  }

  showFAC(facProfiles) {
    if (!facProfiles.length) {
      this.setState({
        error: facProfiles.message,
      });
      //TODO maybe use a set timeout maybe better
    }
    this.setState({
      facProfiles,
    });
  }

  updateMember(member) {
    this.setState({
      member,
    });
  }

  removeError() {
    this.setState({
      error: '',
    });
  }

  redirect() {
    this.setState({
      redirect: true,
    });
  }
  render() {
    return (
      <Router>
        <Container>
          <Navbar redirect={this.redirect} showFAC={this.showFAC} />
          {this.state.redirect ? <Redirect to="/" /> : ''}
          {this.state.error
            ? <Error>
                {this.state.error}
                <ErrorButton onClick={this.removeError} to="/">
                  Go Home
                </ErrorButton>
              </Error>
            : ''}
          <Route
            exact
            path="/"
            render={() => {
              return this.state.facProfiles.length > 0
                ? <Profiles
                    updateMember={this.updateMember}
                    profiles={this.state.facProfiles}
                  />
                : <Profiles updateMember={this.updateMember} />;
            }}
          />
          <Route
            path="/individual"
            render={() => <Individual member={this.state.member} />}
          />
        </Container>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Profiles from './components/Profiles';
import Navbar from './components/navbar';
import Individual from './components/individual';
import { Container } from './components/styledComponents';

injectGlobal`
  body,html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica', sans-serif;
    width: 100%;
    height: 100%;
  }

  *{
    box-sizing: inherit;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facProfiles: [],
      member: null,
    };
    this.showFAC = this.showFAC.bind(this);
    this.updateMember = this.updateMember.bind(this);
  }

  showFAC(facProfiles) {
    this.setState({
      facProfiles,
    });
  }

  updateMember(member) {
    this.setState({
      member,
    });
  }
  render() {
    return (
      <Router>
        <Container>
          <Navbar showFAC={this.showFAC} />
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

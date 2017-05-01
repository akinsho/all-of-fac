import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Profiles from './components/Profiles';
import Navbar from './components/navbar';
import Individual from './components/individual';
import { Container } from './components/styledComponents';

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facProfiles: [],
      member: null,
      redirect: false,
    };
    this.showFAC = this.showFAC.bind(this);
    this.updateMember = this.updateMember.bind(this);
    this.redirect = this.redirect.bind(this);
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

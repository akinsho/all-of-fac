import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Profile from './components/Profile';
import Navbar from './components/navbar';
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
    };
    this.showFAC = this.showFAC.bind(this);
  }

  showFAC(facProfiles) {
    this.setState({
      facProfiles,
    });
  }
  render() {
    return (
      <Container>
        <Navbar showFAC={this.showFAC} />
        {this.state.facProfiles.length > 0
          ? <Profile profiles={this.state.facProfiles} />
          : <Profile />}
      </Container>
    );
  }
}

export default App;

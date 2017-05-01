import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';

import logo from '../logo.svg';
import facLogo from '../../public/fac-logo.png';

const Nav = styled.header`
  width:100%;
  height:10%;
  background:whitesmoke;
  box-shadow:0 1px 1px grey;
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding: 1rem;
`;

const Logo = styled.img`
  width:4rem;
  height:5rem;
`;

const Select = styled.select`
  width: 20%;
  height: 100%;
  border: none;
  box-shadow: 0 1px 1px grey;
`;

const facs = ['FAC10', 'FAC9', 'FAC8', 'FAC7', 'FAC6'];

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const fac = event.target.value;
    const facsUrl = `https://api.github.com/orgs/${fac}/members`;
    fetch(facsUrl).then(res => res.json()).then(parsedRes => {
      console.log('res', parsedRes);
      console.log('props', this.props);
      this.props.showFAC(parsedRes);
    });
  }

  render() {
    return (
      <Nav>
        <Logo src={facLogo} alt="fac logo" />
        <Logo src={logo} alt="React logo" />
        <Select onChange={this.handleChange}>
          {facs.map(fac => <option key={uuid()}>{fac}</option>)}
        </Select>
      </Nav>
    );
  }
}

export default Navbar;

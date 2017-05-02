import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';

import facLogo from '../../public/fac-logo.png';
import { Title, Home, Error, Media } from './styledComponents';

const Nav = styled.header`
  width:100%;
  background:whitesmoke;
  box-shadow:inset 0 -1px 1px grey;
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding: 1rem;
`;

const Logo = styled.img`
  width:4rem;
  height:5rem;
`;

// ${Media.handheld`
//   flex-basis:100%;
// `}
const Select = styled.select`
  width: 25%;
  height: 3rem;
  border: none;
  box-shadow: 0 1px 1px grey;
  ${Media.handheld`
    display:none;
`}
`;

const facs = [
  'Please Select a cohort',
  'FAC10',
  'FAC9',
  'FAC8',
  'FAC7',
  'FAC6',
  'FAC5',
  'FAC4',
  'FAC3',
  'FAC2',
  'FAC1',
];

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const fac = event.target.value;
    const facsUrl = `https://api.github.com/orgs/${fac}/members`;
    fetch(facsUrl)
      .then(res => res.json())
      .then(parsedRes => {
        //TODO need to do oauth to get access to private members lists
        this.props.showFAC(parsedRes);
        if (Array.isArray(parsedRes)) {
          this.setState({ value: fac });
          this.props.redirect();
        }
      })
      .catch(err => (err ? <Error>Something Went Wrong...</Error> : ''));
  }

  render() {
    return (
      <Nav>
        <Logo src={facLogo} alt="fac logo" />
        <Title>All OF FAC</Title>
        <Home to="/"> Home </Home>
        <Select value={this.state.value} onChange={this.handleChange}>
          {facs.map(fac => <option key={uuid()}>{fac}</option>)}
        </Select>
      </Nav>
    );
  }
}

export default Navbar;

import React, { Component } from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';
import uuid from 'uuid/v4';
import '../../node_modules/react-spinner/react-spinner.css';

import Profile from './Profile';
import { Loading } from './styledComponents';
import Spinner from 'react-spinner';

const CardContainer = styled.div`
  width: 100%;
  height: ${props => (props.fullscreen ? '100vh' : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

class Profiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fac: [],
      page: 1,
    };

    this.handleClick = this.handleClick.bind(this);
    this.fetchFoundersCoders = this.fetchFoundersCoders.bind(this);
  }

  componentDidMount() {
    this.fetchFoundersCoders();
  }

  updateState(parsedRes) {
    const newState = this.state.fac.map(member => {
      return member.login !== parsedRes.login
        ? member
        : update(member, { $merge: { bio: parsedRes.bio } });
    });
    this.setState({
      fac: newState,
    });
  }

  handleClick(event) {
    const name = event.currentTarget.id;
    fetch('https://api.github.com/users/' + name)
      .then(res => res.json())
      .then(res => this.props.updateMember(res));
  }

  getData(url, compile) {
    return fetch(url).then(res => res.json()).then(parsedRes => {
      console.log('parsedRes', parsedRes);
      this.setState({
        fac: [...this.state.fac, ...parsedRes],
      });
      if (parsedRes.bio) {
        this.updateState(parsedRes);
      }
      if (compile) {
        return parsedRes.map(result => result.url);
      }
    });
  }

  fetchFoundersCoders() {
    console.log('this.state.page', this.state.page);
    this.setState({
      page: this.state.page <= 3 ? this.state.page++ : 1,
    });
    const facUrl = `https://api.github.com/orgs/foundersandcoders/members?page=${this.state.page}&per_page=30`;
    this.getData(facUrl, true).then(urls =>
      Promise.all(urls.map(url => this.getData(url)))
    );
  }

  displayData(fac) {
    return fac.map(member => {
      return (
        <Profile key={uuid()} handleClick={this.handleClick} {...member} />
      );
    });
  }

  render() {
    const { fac } = this.state;
    if (fac.length < 1) {
      return (
        <CardContainer fullscreen>
          <div><Spinner style={{ width:'100px' }} /></div>
        </CardContainer>
      );
    }
    return (
      <CardContainer>
        {!this.props.profiles
          ? this.displayData(fac)
          : this.displayData(this.props.profiles)}
        <button onClick={this.fetchFoundersCoders}>Next</button>
      </CardContainer>
    );
  }
}

export default Profiles;

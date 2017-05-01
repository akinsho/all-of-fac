import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
// import update from 'immutability-helper';

import { Loading, Image } from './styledComponents';

const ProfileCard = styled.figure`
  width: 40%;
  height: auto;
  padding: 1rem;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  box-shadow: 0px 2px 1px grey;
  background: white;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Figcaption = styled.figcaption`
  padding:0.5rem
  text-align:center;
`;

const facUrl = 'https://api.github.com/orgs/foundersandcoders/members';
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fac: [],
    };
  }

  componentDidMount() {
    this.fetchFoundersCoders();
  }

  getData(url, compile) {
    return fetch(url).then(res => res.json()).then(parsedRes => {
      this.setState({
        fac: [...this.state.fac, ...parsedRes],
      });
      if (parsedRes.bio) {
        this.state.fac.forEach(member => {
          //TODO Need to change this as i'm mutating state!!!
          if (member.login === parsedRes.login) {
            member.bio = parsedRes.bio;
          }
        });
      }
      if (compile) {
        return parsedRes.map(result => result.url);
      }
    });
  }

  fetchFoundersCoders() {
    this.getData(facUrl, true)
      .then(urls => Promise.all(urls.map(url => this.getData(url))))
      .then(console.log('urls processed', this.state));
  }

  displayData(fac) {
    return fac.map(member => {
      return (
        <ProfileCard key={uuid()}>
          <Image src={member.avatar_url} alt={`${member.login}'s picture`} />
          <Figcaption>
            <p>Username: {member.login}</p>
            <article>
              <span>Bio: </span>
              {member.bio
                ? member.bio
                : '...A mystery wrapped in a function, hidden in an array'}
            </article>
          </Figcaption>
        </ProfileCard>
      );
    });
  }

  render() {
    const { fac } = this.state;
    if (fac.length < 1) {
      return <Loading> Loading... </Loading>;
    }
    return (
      <CardContainer>
        {!this.props.profiles
          ? this.displayData(fac)
          : this.displayData(this.props.profiles)}
      </CardContainer>
    );
  }
}

export default Profile;

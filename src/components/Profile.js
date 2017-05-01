import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Spinner from 'react-spinner';

import { Image, Span /*, Loading */ } from './styledComponents';
import '../../node_modules/react-spinner/react-spinner.css';

const Figcaption = styled.figcaption`
  padding:0.5rem
  text-align:center;
`;

const StyledLink = styled(Link)`
  color: skyBlue;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  &:hover {
  text-decoration:underline;
  }
`;
const ProfileCard = styled.figure`
  width: 30%;
  height: auto;
  padding: 1rem;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  box-shadow: 0px 2px 1px grey;
  background: white;
  justify-content: center;
`;

const emptyFieldText = [
  'Who did they kill, where did they hide the bodies??',
  `They need arrays`,
  '...A mystery wrapped in a function, hidden in an array',
];

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.Loaded = this.Loaded.bind(this);
  }

  Loaded() {
    this.setState({
      loading: false,
    });
  }
  render() {
    // {this.state.loading ? <Loading><Spinner /></Loading> : ''}
    const { handleClick, login, avatar_url, bio } = this.props;
    const blurb =
      emptyFieldText[Math.floor(Math.random() * emptyFieldText.length)];
    return (
      <ProfileCard onClick={handleClick} id={login}>
        <Image
          onLoad={this.Loaded}
          src={avatar_url}
          alt={`${login}'s picture`}
        />
        <Figcaption>
          <StyledLink to="/individual"><Span> {login} </Span></StyledLink>
          <article>
            <Span> Bio: </Span>
            {bio ? bio : blurb}
          </article>
        </Figcaption>
      </ProfileCard>
    );
  }
}

export default Profile;

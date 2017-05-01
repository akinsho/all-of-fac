import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Image, Span } from './styledComponents';

const Figcaption = styled.figcaption`
  padding:0.5rem
  text-align:center;
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
`;

const emptyFieldText = [
  'Who did they kill, where did they hide the bodies??',
  `They need arrays`,
  '...A mystery wrapped in a function, hidden in an array',
];

const Profile = ({ handleClick, login, avatar_url, bio }) => (
  <ProfileCard onClick={handleClick} id={login}>
    <Image src={avatar_url} alt={`${login}'s picture`} />
    <Figcaption>
      <Link to="/individual"><Span> Username: </Span></Link>
      {login}
      <article>
        <Span> Bio: </Span>
        {bio
          ? bio
          : emptyFieldText[Math.floor(Math.random() * emptyFieldText.length)]}
      </article>
    </Figcaption>
  </ProfileCard>
);

export default Profile;

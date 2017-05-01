import React from 'react';
import Profile from './Profile';
import { Span, Section, Article, Error, Container } from './styledComponents';

const Individual = ({ member }) => {
  return (
    <Container>
      {!member
        ? <Error>...Waiting</Error>
        : <Article>
            <Profile {...member} />
            <Section>
              <p>
                <Span>name:</Span>
                {member.name ? ' ' + member.name : ' They have no name...'}
              </p>
              <span>
                <Span>email:</Span>
                {member.email
                  ? ' ' + member.email
                  : ' They do not believe in email...'}
              </span>
              <span>
                <Span>following:</Span>
                {member.following
                  ? ' ' + member.following
                  : ' They follow no one..'}
              </span>
              <span>
                <Span>followers:</Span>
                {member.followers
                  ? ' ' + member.followers
                  : ' They are followed by no one...'}
              </span>
              <span>
                <Span>public repos:</Span>
                {member.public_repos ? member.public_repos : ''}
              </span>
            </Section>
          </Article>}
    </Container>
  );
};
export default Individual;

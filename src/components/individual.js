import React from 'react';
import Profile from './Profile';
import { Span, Section, Article, Error, Container } from './styledComponents';

const Individual = ({ member }) => {
  console.log('member', member);
  return (
    <Container>
      {!member
        ? <Error>...Why must you break EVERYTHING! 🙇🏾</Error>
        : <Article>
            <Profile {...member} />
            <Section>
              <p>
                <Span article>Name: </Span>
                {member.name ? member.name : ' They have no name...'}
              </p>
              <span>
                <Span article>Blog: </Span>
                {member.blog
                  ? <a href={'http://www.' + member.blog}>{member.blog}</a>
                  : ' They do not believe in blogs...'}
              </span>
              <span>
                <Span article>Email: </Span>
                {member.email
                  ? member.email
                  : ' They do not believe in email...'}
              </span>
              <span>
                <Span article>Following: </Span>
                {member.following ? member.following : ' They follow no one..'}
              </span>
              <span>
                <Span article>Followers: </Span>
                {member.followers
                  ? member.followers
                  : ' They are followed by no one...'}
              </span>
              <span>
                <Span article>Public repos: </Span>
                {member.public_repos ? member.public_repos : ''}
              </span>
            </Section>
          </Article>}
    </Container>
  );
};
export default Individual;

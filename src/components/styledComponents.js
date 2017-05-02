import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Media = {
  handheld: (...args) => css`
    @media (max-width: 420px){
      ${css(...args)}
    }`,
};

export const StyledLink = styled(Link)`
  color: skyBlue;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  &:hover {
  text-decoration:underline;
  }
`;

export const Home = styled(Link)`
  margin: 0.5rem;
  width: 4rem;
  height: 4rem;
  box-shadow: 0 1px 1px grey;
  border-radius: 50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background: skyBlue;
  text-decoration: none;
  color: black;
  &:hover{
    box-shadow: 0 2px 4px grey;
  }
  ${Media.handheld`
    display:none;
`}
`;

export const Image = styled.img`
  width:100%
  height:100%
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #77b9d9;
`;

export const Loading = styled.div`
  width: 100%;
  height: 8rem;
  background: black;
`;

export const Title = styled.header`
  width: 30%;
  height: 100%;
  text-align: center;
  font-size: 2rem;
`;

export const Span = styled.span`
  font-weight: 800;
  margin-top: 0.3rem;
  color: ${props => (props.article ? 'white' : '')};
  `;

export const Article = styled.article`
  width: 100%;
  height: 90%;
  padding: 0;
  display:flex;
  align-items:center;
  ${Media.handheld`
    flex-wrap:wrap;
`}
`;

export const Section = styled.section`
  display:flex;
  flex:1;
  height: 50%;
  flex-direction: column;
  padding: 1rem;
`;

export const Error = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
`;

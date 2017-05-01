import styled from 'styled-components';

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
  height: 90vh;
  padding: 0;
  display:flex;
  align-items:center;
`;

export const Section = styled.section`
  display:flex;
  flex:1;
  height: 50%;
  flex-direction: column;
`;

export const Error = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
`;

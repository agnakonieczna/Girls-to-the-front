import styled from 'styled-components';

export const MediaTitle = styled.h2`
  font-size: 4rem;
  font-family: 'Monument Extended Bold';
  color: ${({ theme }) => theme.colors.fuchsia};
  font-weight: 700;
  text-align: center;
  margin: 20rem 0 2rem;
  padding: 2rem;
  -webkit-text-stroke: 0.5px black;
  background-image: url('/images/media-background.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const MediaList = styled.ul`
  margin-bottom: 2rem;
`;
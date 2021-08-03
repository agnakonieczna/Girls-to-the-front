import styled from 'styled-components';

const LoadingTitle = styled.h1`
  font-family: 'Monument Extended Bold';
  line-height: 35px;
  -webkit-text-stroke: 1px black;
  color: ${({ theme }) => theme.colors.marine};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  margin: 0 auto;
`;

const Loading = () => {
  return (
    <div>
      <LoadingTitle>Loading...</LoadingTitle>
    </div>
  );
};

export default Loading;

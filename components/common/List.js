import styled from 'styled-components';

const List = styled.ul`
  background-image: url('/images/about-us-list-background.svg');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;

  @media (min-width: 768px) {
    background-size: cover;
    background-position: 100% 50%;
    width: 90%;
    height: 100%;
    padding-left: 3rem;
  }
`;

export default List;

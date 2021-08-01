import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  font-size: 1.6rem;
  text-transform: uppercase;
  color: #000;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
  padding: 1rem 0;

  &:hover {
    color: #1654f2;
  }
`;

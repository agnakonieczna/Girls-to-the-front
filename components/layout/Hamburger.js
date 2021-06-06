import { StyledHamburger, InnerHamburger } from './Hamburger.style';

const Hamburger = ({ menuOpen, handleMenuOpen }) => {
  return (
    <StyledHamburger onClick={handleMenuOpen}>
      <InnerHamburger menuOpen={menuOpen} />
    </StyledHamburger>
  );
};

export default Hamburger;

import { useState } from 'react';
import { useRouter } from 'next/router';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import NavigationLinks from './NavigationLinks';
import SocialMediaIcons from './SocialMediaIcons';
import LangBtn from '../common/LangBtn';
import FlexWrapper from '../common/FlexWrapper';

import * as Style from './Header.style';

const Header = ({ handleOverflow }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    handleOverflow();
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    router.push('/');
  };

  return (
    <Style.StyledHeader
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Style.HeaderWrapper>
        <FlexWrapper justify='flex-start'>
          <Style.Logo onClick={handleLogoClick}>GTTF</Style.Logo>
          <Style.Nav>
            <Style.NavList>
              <NavigationLinks />
            </Style.NavList>
          </Style.Nav>
        </FlexWrapper>
        <SocialMediaIcons header />
        <Style.MobileWrapper>
          <LangBtn />
          <Hamburger menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
        </Style.MobileWrapper>
        <MobileMenu menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
      </Style.HeaderWrapper>
    </Style.StyledHeader>
  );
};

export default Header;

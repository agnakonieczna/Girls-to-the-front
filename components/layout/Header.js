import { useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
//styles
import * as Style from './Header.style';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import NavigationLinks from './NavigationLinks';
import LangBtn from '../common/LangBtn';
import FlexWrapper from '../common/FlexWrapper';
//assets
import Instagram from '../../public/images/instagram.svg';
import Facebook from '../../public/images/facebook.svg';


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
        <Style.SocialMediaWrapper>
          <LangBtn />
          <Style.StyledSocialMediaIcons>
            <a
              href='https://www.instagram.com/girlstothefront_/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram />
            </a>
            <a
              href='https://www.facebook.com/allgirlstothefront/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Facebook />
            </a>
          </Style.StyledSocialMediaIcons>
        </Style.SocialMediaWrapper>
        <Style.MobileWrapper>
          <LangBtn />
          <Hamburger menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />
        </Style.MobileWrapper>
        <AnimatePresence>
          {menuOpen && <MobileMenu menuOpen={menuOpen} handleMenuOpen={handleMenuOpen} />}
        </AnimatePresence>
      </Style.HeaderWrapper>
    </Style.StyledHeader>
  );
};

export default Header;

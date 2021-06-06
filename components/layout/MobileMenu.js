import { useState } from 'react';
import NavigationLinks from './NavigationLinks';
import SocialMediaIcons from './SocialMediaIcons';

import { StyledMobileMenu, NavList } from './MobileMenu.style';

const MobileMenu = ({ menuOpen, handleMenuOpen }) => {
  const [shopLinkClicked, setshopLinkClicked] = useState(false);

  const handleMenuClose = () => {
    handleMenuOpen(false);
    setshopLinkClicked(false);
  };

  const toggleShopListVisibility = () => {
    setshopLinkClicked(!shopLinkClicked);
  };

  return (
    <StyledMobileMenu menuOpen={menuOpen}>
      <nav>
        <NavList>
          <NavigationLinks
            shopLinkClicked={shopLinkClicked}
            toggleShopListVisibility={toggleShopListVisibility}
            handleMenuClose={handleMenuClose}
          />
        </NavList>
      </nav>
      <SocialMediaIcons menuOpen={menuOpen} />
    </StyledMobileMenu>
  );
};

export default MobileMenu;

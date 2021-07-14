import { useState } from 'react';
//styles
import { StyledMobileMenu, NavList, SocialMediaIcons } from './MobileMenu.style';
import NavigationLinks from './NavigationLinks';
//assets
import Instagram from '../../public/images/instagram.svg';
import Facebook from '../../public/images/facebook.svg';

const menuContainer = {
  hidden: {
    x: '-100vw',
    opacity: 0,
    transition: {
      duration: 0.5
    }
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      bounce: 0.1,
      duration: 0.5
    }
  },
  exit: {
    x: '100vw',
    transition: {
      delay: 0.3,
      duration: 0.5,
      when: 'afterChildren'
    }
  }
};

const navListContainer = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4
    }
  }
};

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
    <StyledMobileMenu variants={menuContainer} initial='hidden' animate='show' exit='exit'>
      <nav>
        <NavList variants={navListContainer} initial='hidden' animate='show' exit='exit'>
          <NavigationLinks
            shopLinkClicked={shopLinkClicked}
            toggleShopListVisibility={toggleShopListVisibility}
            handleMenuClose={handleMenuClose}
            menuOpen={menuOpen}
          />
        </NavList>
      </nav>
      <SocialMediaIcons
        initial={{ opacity: 0, y: '100%', x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%', transition: { delay: 1 } }}
        exit={{ opacity: 0, y: '10vh',  x: '-50%', transition: {duration: 0.5} }}
      >
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
      </SocialMediaIcons>
    </StyledMobileMenu>
  );
};

export default MobileMenu;

import { useContext } from 'react';
import { useRouter } from 'next/router';
import StyledLink from '../common/StyledLink';
import { LanguageContext } from '../../context/LanguageContext';

import links from '../../data/headerLinksData';

import { NavListItem, ShopList, ShopListItem , StoreLink} from './NavigationLinks.style';

const NavigationList = ({ shopLinkClicked, toggleShopListVisibility, handleMenuClose }) => {
  const router = useRouter();

  const { language } = useContext(LanguageContext);
  return (
    <>
      {links[language].map((link, index) => {
        if (index === 3 && language === 'PL') {
          return (
            <NavListItem key={link.href} shop>
              <StyledLink
                as='p'
                onClick={toggleShopListVisibility ? toggleShopListVisibility : null}
              >
                {link.text}
              </StyledLink>
              <ShopList clicked={shopLinkClicked}>
                <ShopListItem onClick={handleMenuClose ? handleMenuClose : null}>
                  <a
                    href='https://allegro.pl/uzytkownik/gttfpl'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Allegro
                  </a>
                </ShopListItem>
                <ShopListItem onClick={handleMenuClose ? handleMenuClose : null}>
                  <a
                    href='https://www.etsy.com/shop/GirlstotheFrontPL'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Etsy
                  </a>
                </ShopListItem>
              </ShopList>
            </NavListItem>
          );
        } else if (index === 3 && language === 'EN') {
          return (
            <NavListItem key={link.href} onClick={handleMenuClose ? handleMenuClose : null}>
              <StyledLink
                as={StoreLink}
                href='https://www.etsy.com/shop/GirlstotheFrontPL'
                target='_blank'
                rel='noopener noreferrer'
              >
                {link.text}
              </StyledLink>
            </NavListItem>
          );
        } else {
          return (
            <NavListItem
              key={link.href}
              onClick={handleMenuClose ? handleMenuClose : null}
              active={router.pathname === link.href ? true : false}
            >
              <StyledLink href={link.href}>{link.text}</StyledLink>
            </NavListItem>
          );
        }
      })}
    </>
  );
};

export default NavigationList;

import { StyledSocialMediaIcons } from './SocialMediaIcons.style';
import LangBtn from '../common/LangBtn';

import Instagram from '../../public/images/instagram.svg';
import Facebook from '../../public/images/facebook.svg';

const SocialMediaIcons = ({ header, menuOpen }) => {
  return (
    <StyledSocialMediaIcons menuOpen={menuOpen ? menuOpen : null}>
      {header && <LangBtn />}
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
    </StyledSocialMediaIcons>
  );
};

export default SocialMediaIcons;

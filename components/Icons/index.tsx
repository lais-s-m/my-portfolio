import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

import { Icons, StyledNav } from './style';

const IconsBar = () => (
  <StyledNav>
    <svg width='0' height='0'>
      <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
        <stop stopColor='#96BBE8' offset='0%' />
        <stop stopColor='#D9A5C1' offset='100%' />
      </linearGradient>
    </svg>

    <Icons
      target='_blank'
      href='https://www.linkedin.com/in/lais-silveira-martins/'
    >
      <AiOutlineLinkedin
        className='navbar-icons'
        style={{ fill: 'url(#blue-gradient)' }}
        size={30}
      />
    </Icons>
    <Icons target='_blank' href='https://www.instagram.com/lais_s_martins/'>
      <AiOutlineInstagram
        className='navbar-icons'
        style={{ fill: 'url(#blue-gradient)' }}
        size={30}
      />
    </Icons>
    <Icons target='_blank' href='https://github.com/lais-s-m'>
      <AiOutlineGithub
        className='navbar-icons'
        style={{ fill: 'url(#blue-gradient)' }}
        size={30}
      />
    </Icons>
    <Icons target='_blank' href='https://wa.me/5532984124077'>
      <AiOutlineWhatsApp
        className='navbar-icons'
        style={{ fill: 'url(#blue-gradient)' }}
        size={30}
      />
    </Icons>
  </StyledNav>
);

export default IconsBar;

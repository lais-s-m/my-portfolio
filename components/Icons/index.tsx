import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

import { Icons } from './style';

const IconsBar = () => (
  <div>
    <Icons
      target='_blank'
      href='https://www.linkedin.com/in/lais-silveira-martins/'
    >
      <AiOutlineLinkedin className='navbar-icons' color= />
    </Icons>
    <Icons target='_blank' href='https://www.instagram.com/lais_s_martins/'>
      <AiOutlineInstagram className='navbar-icons' />
    </Icons>
    <Icons target='_blank' href='https://github.com/lais-s-m'>
      <AiOutlineGithub className='navbar-icons' />
    </Icons>
    <Icons target='_blank' href='https://wa.me/5532984124077'>
      <AiOutlineWhatsApp className='navbar-icons' />
    </Icons>
  </div>
);

export default IconsBar;

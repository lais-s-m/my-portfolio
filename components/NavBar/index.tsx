import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

import { Icons, StyledNav } from './style';

const NavBar = () => (
  <StyledNav>
    <h1>Laís Bomtempo</h1>
    <div>
      <button>
        <a href='#home_section'>Home</a>
      </button>
      <button>
        <a href='#about_section'>About</a>
      </button>
      <button>
        <a href='#work_section'>Work</a>
      </button>
    </div>
    <div>
      <Icons
        target='_blank'
        href='https://www.linkedin.com/in/lais-silveira-martins/'
      >
        <AiOutlineLinkedin className='navbar-icons' />
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
  </StyledNav>
);

export default NavBar;

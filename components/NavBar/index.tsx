import { StyledNav } from './style';

const NavBar = () => (
  <StyledNav>
    <div>
      <button>
        <a href='#about_section'>About</a>
      </button>
      <button>
        <a href='#work_section'>Portfolio</a>
      </button>
      <button>
        <a
          target='_blank'
          href='https://drive.google.com/file/d/1aa8qjdjIy2zsP-EG682650GJ2upi5Hjw/view?usp=sharing'
        >
          <h4>Curriculum</h4>
        </a>
      </button>
    </div>
  </StyledNav>
);

export default NavBar;

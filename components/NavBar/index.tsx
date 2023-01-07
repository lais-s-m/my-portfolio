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
          href='https://drive.google.com/file/d/1hP-G0EegQT_Z8eQH1RM5gz3qT_0nTknT/view?usp=sharing'
        >
          <h4>Curriculum</h4>
        </a>
      </button>
    </div>
  </StyledNav>
);

export default NavBar;

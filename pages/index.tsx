import Head from 'next/head';
import Image from 'next/image';

import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

import Button from '../components/Button';
import { LinkPage } from '../components/LinkPage/style';
import { Main } from '../components/Main/style';
import NavBar from '../components/NavBar';
import { PageTitle } from '../components/PageTitle/style';
import Subtitle from '../components/Subtitle';
import { TextField } from '../components/TextField/style';
import Title from '../components/Title';
import { Container } from '../components/Container/styles';
import WorkCardList from '../components/WorkCardList';
import ProfileImg from '../images/profile.png';
import IconsBar from '../components/Icons';

export default function Home() {
  const { ref: mainContainer, inView: mainContainerIsVisible } = useInView();
  const { ref: aboutContainer, inView: aboutContainerIsVisible } = useInView();

  const { ref: aboutTitle, inView: aboutTitleIsVisible } = useInView();
  const { ref: portfolioTitle, inView: portfolioTitleIsVisible } = useInView();

  const { ref: profileImage, inView: profileImageIsVisible } = useInView();

  return (
    <>
      <Head>
        <title>Hello, I'm Laís</title>
      </Head>
      <LinkPage id='home_section' />
      <Main>
        <Container
          mainContainer
          ref={mainContainer}
          className={`${mainContainerIsVisible ? 'animate-container' : ''}`}
        >
          <div>
            <NavBar />
            <Subtitle>
              <TypeAnimation
                sequence={[
                  'Hello,',
                  1000,
                  "Hello, I'm",
                  1200,
                  "Hello, I'm Laís",
                  1400,
                ]}
                wrapper='div'
                cursor={true}
                repeat={Infinity}
              />
            </Subtitle>
            <Title>Web Developer</Title>
            <Subtitle>based in Brazil</Subtitle>
            <IconsBar />
            <a href='#work_section'>
              <Button>Portfolio</Button>
            </a>
            <a
              target='_blank'
              href='https://drive.google.com/file/d/1hP-G0EegQT_Z8eQH1RM5gz3qT_0nTknT/view?usp=sharing'
            >
              <Button gradient>Curriculum</Button>
            </a>
          </div>
          <section
            ref={profileImage}
            className={`${profileImageIsVisible ? 'animate-profile-img' : ''}`}
          >
            <Image alt='profile picture' src={ProfileImg} quality={100} />
          </section>
        </Container>
        <LinkPage id='about_section' />
        <PageTitle
          ref={aboutTitle}
          className={`${aboutTitleIsVisible ? 'animate-fade-in-right' : ''}`}
        >
          About.
        </PageTitle>
        <Container
          ref={aboutContainer}
          className={`${aboutContainerIsVisible ? 'animate-container' : ''}`}
        >
          <TextField>
            After my two-year exchange in Japan, a country surrounded by
            technology, I decided to change careers completely. I was approved
            in a selection process in a Web Development school
            <a target='_blank' href='https://kenzie.com.br/'>
              {' '}
              (Kenzie Academy Brazil){' '}
            </a>
            and as soon as I started my studies I fell completely in love with
            programming. After two months, I started my internship. Currently, I
            am opening a startup with four other programmers with whom I worked
            on a project at Kenzie Academy and I am looking for a full-time job
            as a programmer, to learn more and more and to challenge myself
            every day.
          </TextField>
        </Container>
        <LinkPage id='work_section' />
        <PageTitle
          ref={portfolioTitle}
          className={`${
            portfolioTitleIsVisible ? 'animate-fade-in-right' : ''
          }`}
        >
          Portfolio.
        </PageTitle>
        <WorkCardList />
      </Main>
    </>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

import Button from '../components/Button';
import { LinkPage } from '../components/LinkPage/style';
import { Main } from '../components/Main/style';
import NavBar from '../components/NavBar';
import { PageContainer } from '../components/PageContainer/style';
import { PageTitle } from '../components/PageTitle/style';
import Subtitle from '../components/Subtitle';
import { TextField } from '../components/TextField/style';
import Title from '../components/Title';
import { TitleContainer } from '../components/TitleContainer/styles';
import WorkCardList from '../components/WorkCardList';
import ProfileImg from '../images/profile_picture.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello, I'm Laís</title>
      </Head>
      <NavBar />
      <LinkPage id='home_section' />
      <Main>
        <TitleContainer>
          <div>
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
            <a
              target='_blank'
              href='https://drive.google.com/file/d/1hP-G0EegQT_Z8eQH1RM5gz3qT_0nTknT/view?usp=sharing'
            >
              <Button>Resume</Button>
            </a>
          </div>
          <Image alt='profile picture' src={ProfileImg} />
        </TitleContainer>
        <PageContainer>
          <LinkPage id='about_section' />
          <PageTitle>about.</PageTitle>
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
          <LinkPage id='work_section' />
          <PageTitle>work.</PageTitle>
          <WorkCardList />
        </PageContainer>
      </Main>
    </>
  );
}

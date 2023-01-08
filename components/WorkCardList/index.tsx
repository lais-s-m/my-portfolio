import { StaticImageData } from 'next/image';
import projects from '../../database/projects';
import WorkCard from '../WorkCard';
import { CardList } from './style';
import { Container } from '../Container/styles';

import { useInView } from 'react-intersection-observer';

interface inProject {
  image: StaticImageData | undefined;
  name: string;
  link: string;
  github: string;
  description: string;
}

const WorkCardList = () => {
  const { ref: workContainer, inView: containerIsVisible } = useInView();
  return (
    <CardList
      ref={workContainer}
      className={`${containerIsVisible ? 'animate-container' : ''}`}
    >
      {projects.map((project: inProject, index) => (
        <WorkCard
          image={project.image}
          name={project.name}
          link={project.link}
          github={project.github}
          description={project.description}
          key={index}
        />
      ))}
    </CardList>
  );
};

export default WorkCardList;

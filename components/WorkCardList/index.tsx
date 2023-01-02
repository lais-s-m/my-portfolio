import { StaticImageData } from 'next/image';
import projects from '../../database/projects';
import WorkCard from '../WorkCard';
import { CardList } from './style';

interface inProject {
  image: StaticImageData | undefined;
  name: string;
  link: string;
  github: string;
  description: string;
}

const WorkCardList = () => {
  return (
    <CardList>
      {projects.map((project: inProject, index) => (
        <WorkCard
          key={index}
          image={project.image}
          name={project.name}
          link={project.link}
          github={project.github}
          description={project.description}
        />
      ))}
    </CardList>
  );
};

export default WorkCardList;

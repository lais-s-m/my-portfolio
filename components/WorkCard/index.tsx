import Image from 'next/image';
import Button from '../Button';
import { TextField } from '../TextField/style';
import { Card } from './style';
import { Container } from '../Container/styles';

import { useInView } from 'react-intersection-observer';

const WorkCard = ({ image, name, link, github, description }) => {
  const { ref: workContainer, inView: containerIsVisible } = useInView();
  return (
    <Container
      workCard
      ref={workContainer}
      className={`${containerIsVisible ? 'animate-container' : ''}`}
    >
      <Card>
        <h4>{name}</h4>
        <Image src={image} />
        <div>
          {link && (
            <a target='_blank' href={link}>
              <Button>See the project</Button>
            </a>
          )}
          <a target='_blank' href={github}>
            <Button gradient>See the code</Button>
          </a>
        </div>
        <TextField>
          <span>{description}</span>
        </TextField>
      </Card>
    </Container>
  );
};

export default WorkCard;

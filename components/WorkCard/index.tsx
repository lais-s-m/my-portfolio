import Image from 'next/image';
import Button from '../Button';
import { TextField } from '../TextField/style';
import { Card } from './style';

const WorkCard = ({ image, name, link, github, description }) => (
  <Card>
    <Image src={image} />
    <h4>{name}</h4>
    <div>
      {link && (
        <a target='_blank' href={link}>
          <Button>See the project</Button>
        </a>
      )}
      <a target='_blank' href={github}>
        <Button>See the code</Button>
      </a>
    </div>
    <TextField>
      <span>{description}</span>
    </TextField>
  </Card>
);

export default WorkCard;

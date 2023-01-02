import ToDoListImg from '../images/toDoList_img.png';
import ApplicationBankingImg from '../images/applicationBanking_img.png';
import HamburguerShopImg from '../images/hamburguerShop_img.png';
import DevHubImg from '../images/devHub_img.png';
import RealEstateApiImg from '../images/realEstateAPI_img.png';

const projects = [
  {
    link: 'https://do-it-rosy-eta.vercel.app/',
    github: 'https://github.com/lais-s-m/do-it',
    name: 'ToDo List',
    description:
      'In this application, after registering, the user can write down tasks and access them on any device, just by logging into the site. Built in JavaScript and React. For styling, styled-components was used.',
    image: ToDoListImg,
  },
  {
    link: 'https://nu-kenzie-lais-next.vercel.app/',
    github: 'https://github.com/lais-s-m/Application-Banking',
    name: 'Application Banking',
    description:
      'Add bank transactions, either incoming or outgoing. Built in JavaScript and Next.js. For styling, styled-components was used.',
    image: ApplicationBankingImg,
  },
  {
    link: 'https://hamburgueria-lais.vercel.app/dashboard',
    github: 'https://github.com/lais-s-m/Hamburguer-Shop',
    name: 'Hamburguer Shop',
    description:
      'A simple e-commerce, in which you can add and remove products from your cart. Built in JavaScript and Next.js. For styling, styled-components was used.',
    image: HamburguerShopImg,
  },
  {
    link: 'https://formulario-cadastro-lais-martins.vercel.app/',
    github: 'https://github.com/lais-s-m/Developer-Hub',
    name: 'Developer Hub',
    description:
      'After registering, the user can add information about him/herself such as technologies that he/she is proficient in and the level of proficiency in these technologies. He/She can also edit and delete this information. Built in TypeScript and React. For styling, styled-components was used.',
    image: DevHubImg,
  },
  {
    github: 'https://github.com/lais-s-m/API-real-estate-management',
    name: 'restful API - real estate management',
    description:
      'A restful API for real estate management, with 5 routes: users, login, categories, properties and schedules. Developed in Node.js, Express.js, TypeScript and TypeORM, with the database in PostegreSQL. For security, the bcryptjs and json-web-token packages were used. Throughout the project, Docker was used. Tests for all routes were created. The diagram is inside the project folder.',
    image: RealEstateApiImg,
  },
];

export default projects;

import hero from '../assets/Hero1.jpg';
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div>
      <div className='image-container'>
        <img src={hero} alt='Hero profile' />
        <div>
          <h2 className='text-overlay'>
            BEAUTY LIVES INSIDE YOU, SHOW IT TO THE WORLD
          </h2>
          <Button type='button' className='btn-block btn-overlay'>
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;

import hero from '../assets/Hero1.jpg';
import '../assets/styles/index.css';

const Hero = () => {
  return (
    <div>
      <div className='image-container'>
        <img src={hero} alt='Hero profile' />
        <div>
          <h2 className='text-overlay'>
            BEAUTY LIVES INSIDE YOU, SHOW IT TO THE WORLD
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Hero;

import './App.css';
import HeaderComponent from './components/HeaderComponent';
import CarouselComponent from './components/CarouselComponent';
import AboutMeComponent from './components/AboutMeComponent';
import ExperienceComponent from './components/ExperienceComponent';
import FavTechComponent from './components/FavTechComponent';

function App() {
  return (
    <div className='bg-gradient-to-r from-cyan-200 to-blue-500 ...'>
      <HeaderComponent/>

      <br/>
      <hr/>
      <br/>

      <div className='flex justify-center w-screen'>
        <div className='w-1/2'>
          <CarouselComponent/>
        </div>
      </div>

      <br/>
      <hr/>
      <br/>

      <AboutMeComponent/>

      <br/>
      <hr/>
      <br/>

      <ExperienceComponent/>

      <br/>
      <hr/>
      <br/>

      <FavTechComponent/>
    </div>
  );
}

export default App;

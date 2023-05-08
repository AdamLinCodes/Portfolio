import './App.css';
import HeaderComponent from './components/HeaderComponent';
import CarouselComponent from './components/CarouselComponent';
import AboutMeComponent from './components/AboutMeComponent';
import TechnologiesComponent from './components/TechnologiesComponent';

function App() {
  return (
    <div>
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

      <TechnologiesComponent/>
    </div>
  );
}

export default App;

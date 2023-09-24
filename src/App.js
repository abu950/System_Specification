
import './App.css';
import { LandingPage } from './pages/LandingPage';
import { BottomSection } from './components/BottomSection';
import { FooterSection } from './components/FooterSection';
import { Header } from './components/Header';
import { HeroCarousel } from './components/MainSection';
import { SquareSection } from './components/SquareSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroCarousel />
      <LandingPage />
      <BottomSection />
      <SquareSection />
      <FooterSection />
    </div>
  );
}

export default App;

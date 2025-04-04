import { useState } from 'react';
import './App.css';
import { Navbar } from './component/Navbar';
import { MobileMenu } from './component/MobileMenu';
import { Home } from './component/sections/Home';
import { About } from './component/sections/About';
import { Projects } from './component/sections/Projects';
import { LoadingScreen } from './component/LoadingScreen';
import "./index.css";
import { Contact } from './component/sections/Contact';

function App() {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;

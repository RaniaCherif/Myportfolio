import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Profile from './component/Profile';
function App() {
  return (
   
    <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    
      <Profile/>
      </div>
    </div>
   
  );
}

export default App;

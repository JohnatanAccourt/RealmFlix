import React from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import ScrolableSection from './components/ScrolableSection';

import './styles/globalStyle.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <ScrolableSection />
    </div>
  );
}

export default App;

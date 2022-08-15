import React, { useState } from 'react';
import './styles/App.css';
import { LinkedIconBar } from './components/contact/LinkedIconBar';
import { NavBar } from './components/nav/NavBar';
import { PanelStack } from './components/panels/PanelStack';

function App() {
  const [currentPanel, setPanel] = useState(0);
  
  const onNavClickHandler = (val: number) => {
    setPanel(val);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <header className="nav-stack">
          <NavBar onChangePanel={onNavClickHandler} />
          <LinkedIconBar />
        </header>
        <PanelStack currentPanelId={currentPanel}/>
      </div>
    </div>
  );
}

export default App;

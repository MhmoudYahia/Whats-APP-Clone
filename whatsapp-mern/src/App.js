
import './App.css';
import Sidebar from './SideBar/Sidebar';
import Chat from './Chat/Chat';
import React from 'react';

function App() {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Chat />
      </main>
    </div>
  );
}

export default App;

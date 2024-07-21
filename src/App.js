import { useEffect } from 'react';
import './App.css';
import NavTabs from './components/Tab';
import axios from 'axios'

function App() {

  return (
    <div className="App">
      {/* <Sidebar /> */}
      {/* <TabsVertical />/ */}
      <NavTabs />
    </div>
  );
}

export default App;

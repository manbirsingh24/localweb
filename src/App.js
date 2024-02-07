
import './App.css';
import React, {useState} from 'react'

import Navbar from './components/navbar';
import Body from './components/body';
function App() {

  const [days, setdays] = useState(0);
  const [hours, sethours] = useState();
  const [minutes, setminutes] = useState();
  const [seconds, setseconds] = useState();

  return (
    <>
      <Navbar/>
      <Body/>
    </>
  );
}

export default App;

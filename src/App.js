
import './App.css';
import React, {useState} from 'react'

import Navbar from './components/navbar';
import Body from './components/Body';
function App() {

  const [days, setdays] = useState(0);
  const [hours, sethours] = useState();
  const [minutes, setminutes] = useState();
  const [seconds, setseconds] = useState();

  const date = new Date()

  return (
    <>
      <Navbar/>
      <Body dates={date} bkchod=""/>
    </>
  );
}

export default App;

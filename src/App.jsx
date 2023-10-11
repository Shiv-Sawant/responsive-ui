import { useState } from 'react'
import './App.css'
import Tab from "./components/Tab";
import Drawer from './components/Drawer';
import {LiaSmsSolid} from 'react-icons/lia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{position:'relative'}}>
      <Tab />
      <Drawer/> 
      <div className="smsicon">
                <LiaSmsSolid/>
                </div>
      
    </div>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [notifications,setNotifications]=useState(0);
  useEffect(()=>{
    if(notifications>0){
      document.title="you have"+ notifications + "notifications."
    }
    })

    
  function sendNotifications(){
    setNotifications(notifications+1);
  }
  return (
    <div className="App">
      <button onClick={sendNotifications}>Send Notification</button>
    </div>
  );
}

export default App;

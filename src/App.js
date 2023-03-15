
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import InputBox from './components/inputBox';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode]=useState('light');
  const[modeTxt, setModeTxt]=useState('Enable Dark Mode');
  const[alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
setAlert(null);
},2000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark");
       setModeTxt("Enable Light Mode");
       document.body.style.backgroundColor = "#343a40";
       showAlert('Dark Mode has been enabled', 'success')
    }else{
      setMode("light");
      setModeTxt('Enable Dark Mode');
       document.body.style.backgroundColor = "white"
       showAlert("Light Mode has been enabled", "success");
          }
  }
  return (
   
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} modeTxt={modeTxt} />
        <Alert alert={alert} />
        <div>
         <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <InputBox showAlert={showAlert} mode={mode} toggleMode={toggleMode} heading="Enter the text"/>
          </Route>
        </Switch> 
        </div>

        {/* <About mode={mode} toggleMode={toggleMode} /> */}
      </Router>
   
  );
}

export default App;

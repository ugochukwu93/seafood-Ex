import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import StoreHome from './pages/storehome/storehome.component';
import Header from './components/header/header.component';
import SignUp from './pages/sign-in-sign-up/sign-in-sign-up.pages'



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path = '/' component={Homepage}/>
      <Route  path = '/stallion' component={StoreHome}/>
      <Route path = '/register' component={SignUp}/>
      </Switch>
    </div>
  );    
}

export default App;

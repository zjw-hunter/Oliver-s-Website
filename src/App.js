import React from 'react'
import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from './Components/Contact'
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
          <Header></Header>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about" component={About}></Route>
    </BrowserRouter>
  );
}

export default App;

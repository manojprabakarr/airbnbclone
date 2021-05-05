import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Searchpage from './components/Searchpage'
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/search"><Searchpage/></Route>
        </Switch>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;

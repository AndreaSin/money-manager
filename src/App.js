import {BrowserRouter as Router, Route} from 'react-router-dom'
import MoneyComponent from './components/MoneyComponent/MoneyComponent'
import {useState, useEffect} from 'react'
import DisplayComponent2 from './components/DisplayComponent2'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
        <div className="container">
          <Route path='/' exact onButtonAddTaskCLick component={MoneyComponent}/>
          <Route path='/d2'exact component={DisplayComponent2}/>
          <Footer/>
        </div>
      </Router>
     </>
  );
}

export default App;
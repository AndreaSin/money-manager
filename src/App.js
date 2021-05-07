import {BrowserRouter as Router, Route} from 'react-router-dom'
import MoneyComponent from './components/MoneyComponent/MoneyComponent'
import {useState, useEffect} from 'react'

function App() {

  return (
    <>
      <Router>
        <div className="container">
          <Route path='/' exact onButtonAddTaskCLick component={MoneyComponent}/>
        </div>
      </Router>
     </>
  );
}

export default App;
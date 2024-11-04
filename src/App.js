import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './screens/Home';
import Search from './screens/Search';
import Register from './screens/Register';
import Newsletter from './screens/Newsletter';
import NotFound from './screens/NotFound';
import NotRegister from './screens/NotRegister';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screens/Login';
import {useState, useEffect} from 'react'

const App = () => {
  const [accounts, setAccounts] = useState({
    admin: {
      username: 'admin',
      password: 'drinks'
    }
  })
  const [currAccount, setCurrAccount] = useState('')
  const [randomDrink, setRandomDrink] = useState({})

  const fetchRandomDrink = () => {
    var url="https://www.thecocktaildb.com/api/json/v1/1/random.php"
    
    fetch(url)
        .then(response => {
            return response.json();
        })
        // .then(json => setRandomDrink(json.drink[0]))
        .then(json => setRandomDrink(json.drinks[0]))
        .catch((reason) => {
            console.log(reason)
        })
}

  useEffect( () => {
    fetchRandomDrink()
  }, [])

  return (
    <div className="App">
      
      <header id='splash'>
        <div className='head-title'>
          <h1 className='drink101'>DRINKS101</h1>
          <h2 className='drink'>----------- Drink Recipes for Everyone -----------</h2>
        </div>
      </header>
      

      <Router>
      <div class="nav-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Recipes</Link>
          <Link to="/register">Register</Link>
          <Link to="/newsletter">Newsletter</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/register' element={<Register accounts={accounts} setAccounts={setAccounts} setCurrAccount={setCurrAccount}/>}/>
        <Route path='/newsletter' element={<NotRegister currAccount={currAccount}/>}/>
        <Route path='/newsletter/:username' element={<Newsletter randomDrink={randomDrink}/>}/>
        <Route path='/login' element={<Login accounts={accounts} setCurrAccount={setCurrAccount}/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>

      <footer>
        <p>P: (647) 987-0432 <br/>E: customerService@drinks101.com<br/> &copy; DRINKS101. All rights resereved.</p>
      </footer>
    </div>
  );
}

export default App;

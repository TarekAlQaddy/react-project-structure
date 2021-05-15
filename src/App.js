import './App.css'
import Home from './pages/home'
import About from './pages/about'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route exact path="about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

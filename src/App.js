import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from './Components/Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Routes />
      </Switch>
    );
  }
}

export default App;

// import React from 'react';
import React, { Component } from 'react';
import { MemoryRouter, Router } from 'react-router';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyleRoot } from 'radium';
import { Store, History} from './Store';
import Home from './components/Home';
import LevelOne from './components/LevelOne';
import LevelTwo from './components/LevelTwo';
import LevelThree from './components/LevelThree';
import Loading from './components/Load/Loading';
import './App.css';
import EZ_Icon from './static/ez_icon.png';
import Logo from './logo.svg';

const styles = {
  wrap: {
      backgroundColor: '#282c34',
      width: '100vw',
      height: '100vh',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      color: '#fff',
  },
};


class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <MemoryRouter>
          <StyleRoot>
            <Router history={History}>
              <div style={styles.wrap}>
              <img src={EZ_Icon} className="App-logo2" alt="ezTech" />
                <Switch>
                  <Route exact path="/" render={() => (<Home store={Store} history={History} />)} />
                  <Route exact path="/LevelOne" render={() => (<LevelOne store={Store} />)} />
                  <Route exact path="/LevelTwo" render={() => (<LevelTwo store={Store} />)} />
                  <Route exact path="/LevelThree" render={() => (<LevelThree store={Store} />)} />
                </Switch>
              </div>
              <Loading />
            </Router>
          </StyleRoot>
        </MemoryRouter>
      </Provider>
    );
  }
}



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={EZ_Icon} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <div className="App-link">
//             EZ Learn React
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

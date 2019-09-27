// import React from 'react';
import React, { Component } from 'react';
import { MemoryRouter, Router } from 'react-router';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store, History} from './Store';
import Home from './components/Home';
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


// class App extends Component {
//   render() {
//     return (
//       <Provider store={Store}>
//         <MemoryRouter>
//           <Router history={History}>
//             <div style={styles.wrap}>
//             <img src={EZ_Icon} className="App-logo2" alt="ezTech" />
//               <Switch>
//                 <Route exact path="/" render={() => (<Home store={Store} history={History} />)} />
//               </Switch>
//             </div>
//           </Router>
//         </MemoryRouter>
//       </Provider>
//     );
//   }
// }



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="App-link">
            EZ Tech Learn React
          </div>
        </header>
      </div>
    );
  }
}

export default App;

// import React from 'react';
import React, { Component } from 'react';
import '../App.css';


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
    content: {
        width: '80%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    text: {
        fontFamily: 'FANTASY',
        fontSize: 50,
        cursor: 'pointer',
    },
};

class Home extends Component {
  render() {
    return (
        <div style={styles.content}>
            <h2 style={styles.text}>
                To do list
            </h2>
            <h2 style={styles.text}>
                Easy chat
            </h2>
            <h2 style={styles.text}>
                Satellite map
            </h2>
        </div>
    );
  }
}

export default Home;

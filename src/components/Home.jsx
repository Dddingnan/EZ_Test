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
  jumpPage(page) {
    const {
        history,
    } = this.props;
    switch (page) {
        case 1:
            history.push('/LevelOne');
            break;
        case 2:
            history.push('/LevelTwo');
            break;
        case 3:
            history.push('/LevelThree');
            break;
        default:
            break;
    }
  }

  render() {
    return (
        <div style={styles.content}>
            <h2 onClick={() => this.jumpPage(1)} style={styles.text}>
                To do list
            </h2>
            <h2 onClick={() => this.jumpPage(2)} style={styles.text}>
                Easy chat
            </h2>
            <h2 onClick={() => this.jumpPage(3)} style={styles.text}>
                Satellite map
            </h2>
        </div>
    );
  }
}

export default Home;

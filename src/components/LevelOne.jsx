import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { setFalse } from '../actions/LevelOne';
import * as LevelOneActions from '../actions/LevelOne';

const styles = {
    wrap: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    content: {
        width: 450,
        height: 800,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid',
    },
    subContent: {
        width: 350,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid',
        marginRight: 50,
    },
    text: {
        fontFamily: 'FANTASY',
        fontSize: 50,
        cursor: 'pointer',
        margin: '5px 0',
    },
    border: {
        width: '100%',
        border: '1px solid'
    },
    input: {
        width: '80%',
        height: 30,
        fontSize: 20,
        borderRadius: 10,
    },
    btn: {
        fontFamily: 'FANTASY',
        height: 30,
        fontSize: 20,
        borderRadius: 10,
        margin: '40px 5px 0 5px',
        cursor: 'pointer',
    },
    listContent: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
    },
    listText: {
        fontFamily: 'FANTASY',
        fontSize: 30,
        fontWeight: 'bold',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
    },
};

class LevelOne extends Component {
  render() {
      const fakeData = [
          'Welcome To Level One',
          'You will learn basic redux !',
          'Congratulations.'
      ];
    return (
        <div style={styles.wrap}>
            <div style={styles.subContent}>
                <h2  style={styles.text}>
                    Input
                </h2>
                <input
                    type="text"
                    placeholder="Type Something..."
                    style={styles.input}>
                </input>
                <div style={styles.flex}>
                    <button
                        type="button"
                        style={styles.btn}>
                        Send
                    </button>
                    <button
                        type="button"
                        style={styles.btn}>
                        clear
                    </button>
                </div>
            </div>

            <div style={styles.content}>
                <h2  style={styles.text}>
                    To do list
                </h2>
                <div style={styles.border} />
                <div style={styles.listContent}>
                    {fakeData.map((val, key) =>
                        <Fragment key={`${val}_${key}`}>
                            <div style={styles.listText}>
                                {val}
                            </div>
                            <div style={styles.border} />
                        </Fragment>
                    )}
                </div>
            </div>

        </div>
    );
  }
}

export default LevelOne;

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
// import { setInputValue, setListData,  } from '../actions/LevelOne';
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
    constructor() {
        super();
        this.state = {
            inputVal: '',
        };
    }
    setInputVal(e) {
        this.props.setInputValue(e.target.value);
    }

    sendData() {
        const {
            setListData,
            inputVal,
          } = this.props;
          setListData(inputVal);
    }

    clearData() {
        const {
            clearListData,
          } = this.props;
          clearListData();
    }
  render() {
      const {
        listDate,
        inputVal,
      } = this.props;
    return (
        <div style={styles.wrap}>
            <div style={styles.subContent}>
                <h2  style={styles.text}>
                    Input
                </h2>
                <input
                    type="text"
                    value={inputVal}
                    placeholder="Type Something..."
                    onChange={e => this.setInputVal(e)}
                    style={styles.input}>
                </input>
                <div style={styles.flex}>
                    <button
                        type="button"
                        onClick={() => this.sendData()}
                        style={styles.btn}>
                        Send
                    </button>
                    <button
                        type="button"
                        onClick={() => this.clearData()}
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
                    {listDate.map((val, key) =>
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

const reduxHook = connect(
    state => ({
        listDate: state.LevelOne.listDate,
        inputVal: state.LevelOne.inputValue,
    }),
    dispatch => bindActionCreators({
        ...LevelOneActions,
    }, dispatch),
);

export default compose(
    reduxHook,
)(LevelOne);

// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as LoadActions from '../actions/Load';
import * as LevelTwoActions from '../actions/LevelTwo';
import Trump from '../static/trump.jpg';
import Xie from '../static/Xie.jpg';

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
        width: 700,
        height: 800,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid',
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
    listContent: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        border: '1px solid'
    },
    inputContent: {
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        width: '80%',
        height: '100%',
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 20,
    },
    btn: {
        width: '20%',
        height: '100%',
        color: 'white',
        fontSize: 20,
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    flexEnd: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    flexStart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    chat: {
        // width: '100%',
        height: '100%',
        minHeight: 50,
        minWidth: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        color: 'black',
        marginRight: 10,
    },
    chatRes: {
        // width: '100%',
        height: '100%',
        minHeight: 50,
        minWidth: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd0d0',
        borderRadius: 50,
        color: 'black',
        marginLeft: 10,
    },
    chatContent: {
        padding: 10,
    },
    downContent: {
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid',
        alignItems: 'center',
    },
    flexCon: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',  
    },
    downBtn: {
        width: '100%',
        height: '100%',
        color: 'white',
        fontSize: 20,
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
};

class LevelTwo extends Component {
    constructor() {
        super();
        this.ChatList = React.createRef();
        this.state = {
            inputVal: '',
        };

    }
    setInputVal(e) {
        this.setState({
            inputVal: e.target.value,
        });
    }

    componentDidUpdate(prevProps) {
        const {
            listDate,
          } = this.props;
        if (listDate !== prevProps.listDate) {
            // make you send message down to bottom
            this.toBottom();
        }
    }

    toBottom() {
        this.ChatList.current.scroll(0, this.ChatList.current.scrollHeight);
      }

    sendData(e) {
        const {
            setListData,
          } = this.props;
        if (this.state.inputVal) {
            // from here
            setListData(this.state.inputVal);
            this.setState({
                inputVal: '',
            });
        }
        e.preventDefault();
    }

  render() {
      const {
        listDate,
        getWeather,
        getAirportInfo,
        loadingShow,
      } = this.props;
    return (
        <form style={styles.wrap} onSubmit={e => this.sendData(e)}>
            <div style={styles.content}>
                <h2  style={styles.text}>
                    Easy chat
                </h2>

                <div style={styles.listContent} ref={this.ChatList}>
                    {listDate.map(val =>
                        <div style={styles.flexColumn}>
                            <div style={styles.flexEnd}>
                                <div style={styles.chat}>
                                    <div style={styles.chatContent}>
                                        {val.Trunp}
                                    </div>
                                </div>
                                <img src={Trump} style={styles.img} alt="Trump" />
                            </div>
                            <div style={styles.flexStart}>
                                <img src={Xie} style={styles.img} alt="Xie" />
                                    <div style={styles.chatRes}>
                                    <div style={styles.chatContent}>
                                        {val.Xie}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                <div style={styles.downContent}>
                    <div style={styles.flexCon}>
                        <button
                            type="button"
                            onClick={() => {
                                loadingShow();
                                getWeather();
                            }}
                            style={styles.downBtn}>
                            Today's Weather
                        </button>
                    </div>
                
                    <div style={styles.flexCon}>
                        <button
                            type="button"
                            onClick={() => {
                                loadingShow();
                                getAirportInfo();
                            }}
                            style={styles.downBtn}>
                            Airport's Info
                        </button>
                    </div>
                </div>

                <div style={styles.inputContent}>
                    <input
                        type="text"
                        value={this.state.inputVal}
                        placeholder="Type Something..."
                        onChange={e => this.setInputVal(e)}
                        style={styles.input} />
                    <button
                        type="submit"
                        style={styles.btn}>
                        Send
                    </button>
                </div>

            </div>
        </form>
    );
  }
}


const reduxHook = connect(
    state => ({
        listDate: state.LevelTwo.listDate,
    }),
    dispatch => bindActionCreators({
        ...LevelTwoActions,
        ...LoadActions,
    }, dispatch),
  );

export default compose(
    reduxHook,
)(LevelTwo);

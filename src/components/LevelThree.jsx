// import React from 'react';
import React, { Component } from 'react';
import radium from 'radium';
import Light from '../static/light.jpg';
import Dark from '../static/dark.jpg';

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
        width: '20%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    rContent: {
        width: '80%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'FANTASY',
        fontSize: 50,
        cursor: 'pointer',
    },
    centerIcon: {
        width: 80,
        height: 35,
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#4f6585',
        border: '1px solid #4f6585',
        transition: 'flex-end 0.4s ease',
        cursor: 'pointer',
      },
      centerIcon2: {
        width: 80,
        height: 35,
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        transition: 'flex-start 0.5s ease-in-out',
        backgroundColor: '#ccc',
        border: '1px solid #ccc',
        cursor: 'pointer',
      },
      controlIcon: {
        width: 30,
        height: '90%',
      },
      controlBtn: {
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: 30,
        backgroundColor: '#fff',
      },
      yesIcon: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
      },
      noIcon: {
        color: '#4f6585',
        fontSize: 20,
        fontWeight: '600',
      },
      img: {
          width: 1500,
          height: 800,

      },
};

class LevelThree extends Component {
    state = {
        status: false,
      }
  render() {
      const {
        status,
      } = this.state;
    return (
        <div style={styles.wrap}>
            <div style={styles.content}>
                <h2  style={styles.text}>
                    Satellite map
                </h2>
                <div
                    onClick={() => this.setState({ status: !status })}
                    style={[styles.centerIcon, !status && styles.centerIcon2]}>
                    <div style={styles.controlIcon}>
                    <button
                        style={styles.controlBtn}
                        type="button"
                        key="controlBtn">
                        {status ? (
                        <span style={styles.yesIcon} />
                        ) : (
                        <span style={styles.noIcon} />
                        )
                        }
                    </button>
                    </div>
                </div>
            </div>
            <div style={styles.rContent}>
            {status 
                ?
                <img src={Light} style={styles.img} alt="Light" />
                :
                <img src={Dark} style={styles.img} alt="Dark" />
            }
            </div>
        </div>
    );
  }
}

export default radium(LevelThree);

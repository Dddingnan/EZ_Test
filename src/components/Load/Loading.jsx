import React, { PureComponent } from 'react';
import './styles.css';
import {
  compose,
  bindActionCreators,
} from 'redux';
import { connect } from 'react-redux';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
};
class Loading extends PureComponent<Props> {
  render() {
    const {
      loding,
    } = this.props;
    if (!loding) return null;
    return (
      <div style={styles.wrapper}>
        <div className="lds-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    loding: state.Load.loding,
  }),
  dispatch => bindActionCreators({
  }, dispatch),
);

export default compose(
  reduxHook,
)(Loading);

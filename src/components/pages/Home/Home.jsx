/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import cn from 'classname';
import React, { Component } from 'react';
import Card from '../../common/Card';
import Retailers from './../../Retailers/Retailers';
import Toolbar from '../../common/Toolbar/Toolbar';
import styles from './Home.scss';

// <div className={styles.row, styles['row-vertical-indent']}>
class Home extends Component {
  render() {
    return (
      <div className={cn(styles['container-fluid'], styles['approve'])}>
        <Toolbar
          name="Approve new retailers"
          count="4"
          filter="true"
        />
        <div className={styles.cards}>
          <div className={cn(styles['row'], styles['row-vertical-indent']) + ' row row-vertical-indent'}>
            <Card retailerId="1" />
            <Card retailerId="2" />
            <Card retailerId="3" />
            <Card retailerId="4" />
            <Card retailerId="5" />
            <Card retailerId="6" />
            <Card retailerId="7" />
            <Card retailerId="8" />
            <Card retailerId="9" />
            <Card retailerId="10" />
          </div>
        </div>
        <Toolbar name="Manage returns" count="6" />
        <div className='retailers'>
          <Retailers />
        </div>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  // users: PropTypes.func.isRequired,
};

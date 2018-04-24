import cn from 'classname';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Card.scss';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            retailerId: 1,
        };
    }
	goToApprovalRetailer(id) {
        this.props.history.push('/approve-retailer/'+ id);
	}
	render() {
		return (
  <div
    onClick={() => {this.goToApprovalRetailer(this.state.retailerId);}}
    className='indent col-lg-1 col-md-1-4 col-sm-1-4 col-sm-1-3 col-sm-1-2'
  >
    <div className={cn(styles.shadow, styles.card)}>
      <div className={styles.logo}>
        <img alt="" src={require('../../../images/Card.png')} />
        <p>Sacks Fifth Avenue</p>
      </div>
      <div className={styles.desc}>
        <p>Request approval 365 days ago</p>
        <p><a href='#'>nikbresnick.com</a></p>
      </div>
    </div>
  </div>
		);
	}
}

export default withRouter(Card);
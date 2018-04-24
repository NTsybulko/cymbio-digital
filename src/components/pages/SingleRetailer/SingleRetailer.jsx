import cn from 'classname';
import React, { Component } from 'react';
import Toolbar from '../../common/Toolbar/Toolbar';
import styles from './SingleRetailer.scss';

class SingleRetailer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goBack = this.goBack.bind(this);
  }
  componentDidMount () {
    this.props.getRetailers();
  }
  goBack(){
    this.props.history.goBack();
  }

  render() {
    let statusClass = 'pendingStatus';
    
    return (
      <div>
        <div className={styles.navPanel}>
          <button
            onClick={this.goBack}
            className={styles.navPanelBack}
            type="button"
          >
            <svg
              fill="#303f9f"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
            </svg>
            Back
          </button>
          <span className={styles.navPanelBorder} />
          {'Nikbresnick'}
        </div>
        <div className='container-fluid'>
          <div className={styles.singleRetailer}>
            <div className={styles.singleRetailerTop}>
              <div className={styles.singleRetailerLogo}>
                <img alt="" src={require('../../../images/Card.png')} />
              </div>
              <span className={styles.singleRetailerName}>Nikbresnick</span>
              <p>Pending Approval</p>
              <button type="button" className={cn(styles.singleRetailerBtn, 'btn')}>Approve</button>
            </div>
            <Toolbar name="Details" />
            <div className={styles.singleRetailerInfo}>
              <div>
                <h3>RETAILER DETAILS</h3>
                <dl>
                  <dt>Company name:</dt>
                  <dd>Nikbresnick</dd>
                  <dt>Website:</dt>
                  <dd><a target="_blank" href={`http://${'wenikbresnick.com'}`}>wenikbresnick.com</a></dd>
                  <dt>eCom platform:</dt>
                  <dd>Shopify</dd>
                  <dt>Status:</dt>
                  <dd>
                    <span className={styles.singleRetailerStatus + ' ' + statusClass}>Pending approval (365 days)</span>
                  </dd>
                  <dt>Approved products:</dt>
                  <dd>0</dd>
                </dl>
              </div>
              <div>
                <h3>CONTACT DETAILS</h3>
                <dl>
                  <dt>Name:</dt>
                  <dd>Tom Rosenberg</dd>
                  <dt>E-mail:</dt>
                  <dd><a href={`mailto:${'tomashof1@gmail.com'}`}>tomashof1@gmail.com</a></dd>
                  <dt>Phone:</dt>
                  <dd>972-054-9877382</dd>
                  <dt>Job title:</dt>
                  <dd>Store manager</dd>
                  <dt>Additional note:</dt>
                  <dd>---</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleRetailer;
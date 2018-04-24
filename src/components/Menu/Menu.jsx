/* eslint-disable global-require */
import cn from 'classname';
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter as Router, Link } from 'react-router-dom';
import styles from './Menu.scss';
import Panel from '../Panel';
import MainPanel from '../MainPanel';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false,
      drop_m: false,
      menu: {
        current: 'home',
        items: ['home', 'products', 'retailers', 'orders', 'stats']
      }, 
      menu_desctop: ['home', 'products', 'retailers', 'orders', 'stats'],
      menu_items: ['/home', '/products', '/retailers', '/orders', '/stats']
    };
  }
  componentWillMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this), false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside.bind(this), false);
  }
  handleDownOrUp() {
    this.setState({
      drop: !this.state.drop
    });
  }

  handleDropdown = (index) => {
    let arr = this.state.menu.items;
    let ch = arr[0];
    arr[0] = arr[index];
    arr[index] = ch;
    this.setState({
      drop: !this.state.drop,
      menu: {
        current: arr[index],
        items: arr
      }
    });
  }

  handleDropdownMobile = () => {
    this.setState({
      drop_m: !this.state.drop_m
    });
  }


  handleClickOutside(event) {
    const domNode = ReactDOM.findDOMNode(this);

    if ((!domNode || !domNode.contains(event.target))) {
        this.setState({
            drop : false
        });
    }
  }

  render() {
    const { 
            drop,
            drop_m,
            menu,
            menu_desctop,
            menu_items,
          } = this.state;
          
    const {
      history
    } = this.props;
    
    return (
      <Fragment>
        <header>
          <div className={styles.logo}>
            <a href='#'>
              <img alt="" src={require('../../images/logo.png')} /><span>Brands</span>
            </a>
          </div>
          <div className={styles.menu_desctop}>
            {
              menu_desctop.map((item, i) => {
                if (0 === i) {
                  return (
                    <div key={i}>
                      <div className={styles.border}>
                        <Link 
                          className={history.location.pathname === menu_items[i] ? 
                                                          styles.active : 
                                                          ''}  
                          to={`/${item}`}
                        >{item}
                        </Link>
                        <span
                          className={drop === false ? 'ic-dropdown ' + cn(styles.dropdown_icon) :
                            'ic-dropdown ' + cn(styles.dropdown_icon, styles.down)}
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={i}>
                      <div className={styles.border}>
                        <Link 
                          className={history.location.pathname === menu_items[i] ? 
                                                                      styles.active : 
                                                                      ''} to={`/${item}`}
                        >{item}
                        </Link>
                      </div>
                    </div>
                  );
                }
              })
            }
          </div>
          <div className={drop === false ? styles.menu : cn(styles.menu , styles.drop)}>
            {
              menu.items.map((item, i) => {
                if (0 === i) {
                  return (
                    <div key={i}>
                      <div onClick={() => {this.handleDownOrUp();}} className={styles.border}>
                        <Link
                          className={styles.active}
                          onClick={() => this.handleDropdown(i)}
                          to={`/${item}`}
                        >{item}
                        </Link>
                        <span
                          className={drop === false ? 'ic-dropdown ' + cn(styles.dropdown_icon) :
                            'ic-dropdown ' + cn(styles.dropdown_icon, styles.down)}
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={i}>
                      <div className={styles.border}>
                        <Link
                          onClick={() => this.handleDropdown(i)}
                          to={`/${item}`}
                        >{item}
                        </Link>
                      </div>
                    </div>
                  );
                }
              })
            }
          </div>
          <div className={styles.panel}>
            <div className={styles.icon_search}>
              <span className={styles['ic-search'] + ' ic-search'} />
              <input type='text' placeholder='Search products' />
            </div>
            <div className={styles.panel_icons}>
              <span className='ic-notifications' />
              <span className='ic-dashboard' />
              <span className='ic-account' />
              <span
                onClick={this.handleDropdownMobile}
                className={drop_m === false ? 'ic-close ' + cn(styles['ic-close']) :
                  'ic-close ' + cn(styles['ic-close'], styles.isHide)}
              />
              <span
                onClick={this.handleDropdownMobile}
                className={drop_m === false ? 'ic-menu ' + cn(styles['ic-menu']) :
                  'ic-menu ' + cn(styles['ic-menu'], styles.isHide)}
              />
            </div>
          </div>
        </header>
        <div className={drop_m === false ? styles.m_menu : cn(styles.m_menu, styles.down)}>
          <div className={styles.wrapper}>
            <div className={styles.icon_search}>
              <span className={styles['ic-search']} />
              <input type='text' placeholder='Search products' />
            </div>
            <div className={styles.m_menu_items}>
              <div><a className={styles.active} href='#'>Home</a></div>
              <div><a href='#'>Products</a></div>
              <div><a href='#'>Retailers</a></div>
              <div><a href='#'>Orders</a></div>
              <div><a href='#'>Stats</a></div>
            </div>
            <div className={styles.info}>+ 1 000 000 00 00  |  email@mail.com</div>
          </div>
        </div>
        <Panel>
          <MainPanel />
        </Panel>
      </Fragment>
    );
  }
}

export default Menu;

import cn from 'classname';
import React, { Component } from 'react';
import styles from './Toolbar.scss';

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drop_first: false,
            drop_last: false,
            items_first: {
                current: '12 per pages',
                items: ['12 per pages', '18 per pages', '25 per pages']
            },
            items_last: {
                current: 'Request time',
                items: ['Request time', '1 time', '2 time']
            }
        };
    }
    handleDrop = () => {
        this.setState({
            drop_first: !this.state.drop_first,
            drop_last: false
        });
    }
    handleDrop_ = () => {
        this.setState({
            drop_first: false,
            drop_last: !this.state.drop_last
        });
    }
    handleSwitchItemFirst(index) {
        let arr = this.state.items_first.items;
        let cur = arr[index];
        this.setState({
            items_first: {
                current: arr[index],
                items: arr
            }
        });
    }
    handleSwitchItemLast(index) {
        let arr = this.state.items_last.items;
        let cur = arr[index];
        this.setState({
            items_last: {
                current: arr[index],
                items: arr
            }
        });
    }
	render() {
        let countBlock,
            filterBlock;

    if(this.props.count !== undefined) {
      countBlock = <p>{this.props.count}</p>;
    }
    if(this.props.filter ) {
      const {
        drop_first,
        drop_last,
        items_first,
        items_last
      } = this.state;
    
      const current_first = items_first.items.indexOf(items_first.current);
      const current_last = items_last.items.indexOf( items_last.current);
    
    
        filterBlock = (
          <div className={cn('toolbar_right')}>
            <div onClick={this.handleDrop} className={drop_first === false ? cn('drop_down', 'passive') : 'drop_down'}>
              <div className={cn('target')}>
                {items_first.current}
                <span className={cn('["ic-dropup"]', 'ic-dropup')} />
              </div>
              <div className={cn('items')}>
                <div className={cn('wrapper_items')}>
                  {
                    items_first.items.map((item, i, arr) => {
                      if (current_first === i) {
                        return (
                          <div
                            key={i} className={cn('active')}
                            onClick={() => this.handleSwitchItemFirst(i)}
                          >{item}
                          </div>
                        );
                      } else {
                        return <div key={i} onClick={() => this.handleSwitchItemFirst(i)}>{item}</div>;
                      }
                    })
                  }
                </div>
              </div>
            </div>
            <div onClick={this.handleDrop_} className={drop_last === false ? cn('drop_down', 'passive') : 'drop_down'}>
              <div className={cn('target')}>{items_last.current}
                <span className={cn('["ic-dropup"]', 'ic-dropup')} />
              </div>
              <div className={cn('items')}>
                <div className={cn('wrapper_items')}>
                  {
                    items_last.items.map((item, i, arr) => {
                      if (current_last === i) {
                        return (
                          <div
                            key={i} className={cn('active')}
                            onClick={() => this.handleSwitchItemLast(i)}
                          >{item}
                          </div>
                        );
                      } else {
                        return <div key={i} onClick={() => this.handleSwitchItemLast(i)}>{item}</div>;
                      }
                    })
                  }
                </div>
              </div>
            </div>
            <div className={cn('sort')}>
              <span className='["ic-sort"]' />
            </div>
          </div>
    );
    }

    return (
      <div className={cn('toolbar')} >
        <div className={cn('toolbar_left')}>
          <span>{this.props.name}</span>
          <span className={cn('wall')} />
          {countBlock}
        </div>
        {filterBlock}
      </div>
    );
	}
}

export default Toolbar;
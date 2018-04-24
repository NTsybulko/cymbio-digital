/* eslint-disable global-require */
import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import cn from 'classname';
import OverlayScrollbars from 'overlayscrollbars';
import '../../../node_modules/overlayscrollbars/css/OverlayScrollbars.css';

// C:\work\repositories\cymbio-digital\node_modules\overlayscrollbars\css\OverlayScrollbars.css

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import styles from './Retailers.scss';


function statusFormatter(cell, row) {
  return <button className="returned">Products returned</button>;
}

function productFormatter(cell, row) {
  return (
    <div>
      <img
        alt=""
        width="40"
        style={{ marginRight: '15px' }}
        src={require('../../images/Card.png')}
      />
      {`${cell}`}
    </div>
  );
}

function getCaret(direction) {
  if (direction === 'asc') {
    return <span className={cn(styles['ic-sort'], 'ic-sort')} />;
  }
  if (direction === 'desc') {
    return (
      <span
        className={cn(styles['ic-sort'], 'ic-sort', styles.down, 'down')}
      />
    );
  }
  return <span className={cn(styles['ic-sort'], 'ic-sort')} />;
}

class Retailers extends Component {

  componentDidMount() {
    OverlayScrollbars(document.querySelectorAll('.react-bs-container-body')[0], {
      sizeAutoCapable: true,
      paddingAbsolute: true,
      className: 'os-theme-dark'
    });
  }

  render() {
    const products = [
    {
      retailers: 1,
      type: 'Dropship ',
      date: '08.30.2018',
      products: 'sdvsdwefwefvsdv',
      total: '345',
      order: '38',
    },
    {
      retailers: 'Sacks Fifth Avenue',
      type: 'Dropship ',
      date: '02.30.2018',
      products: 'wef',
      total: '345',
      order: '90',
    },
    {
      retailers: 'Sacks Fifth Avenue ',
      type: 'Dropship ',
      date: '02.30.2018',
      products: 'wefwef',
      total: '345',
      order: '4',
    },
    {
      retailers: 'Sacks Fifth Avenue ',
      type: 'Dropship ',
      date: '04.30.2018',
      products: 'dfb',
      total: '345',
      order: '56',
    },
    {
      retailers: 'Sacks Fifth Avenue ',
      type: 'Dropship ',
      date: '03.30.2018',
      products: 'fgn',
      total: '345',
      order: '87',
    },
    {
      retailers: 'Sacks Fifth Avenue ',
      type: 'Dropship ',
      date: '02.30.2018',
      products: 'ty',
      total: '345',
      order: '5',
    },
    {
      retailers: 'Sacks Fifth Avenue ',
      type: 'Dropship ',
      date: '09.30.2018',
      products: 'tynm',
      total: '345',
      order: '38',
    },
    {
      retailers: 'Sacks Fifth Avenue ',
      type: 'Dropship ',
      date: '06.30.2018',
      products: 'gh',
      total: '345',
      order: '43',
    },
  ];
    return (
      <BootstrapTable
        data={products}
        printable
        striped
        hover
        height="330"
        scrollTop="Top"
      >
        <TableHeaderColumn
          isKey
          dataField="retailers"
          headerAlign="left"
          width="20%"
          dataFormat={productFormatter}
        >
            Product ID
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="type"
          headerAlign="center"
          dataAlign="center"
        >
            Product Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="date"
          headerAlign="center"
          dataAlign="center"
          dataSort
          caretRender={getCaret}
        >
            Product Price
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="products"
          headerAlign="center"
          dataAlign="center"
        >
            Product ID
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="total"
          headerAlign="center"
          dataAlign="center"
        >
            Product Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="order"
          headerAlign="center"
          dataAlign="center"
        >
            Product Price
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="status"
          headerAlign="center"
          dataAlign="center"
          dataFormat={statusFormatter}
        >
            Status
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Retailers;

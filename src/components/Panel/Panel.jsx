import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.scss';

const Panel = ({ children }) => (
  <div className={styles.panel_info}>{children}</div>
);

export default Panel;

Panel.propTypes = {
  children: PropTypes.object.isRequired,
};

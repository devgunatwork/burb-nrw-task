import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './StyledLink.module.scss';

const StyledLink = ({ children, to }) => (
  <Link className={styles.root} to={to}>
    {children}
  </Link>
);

StyledLink.defaultProps = {
  children: '',
};
StyledLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

export default StyledLink;

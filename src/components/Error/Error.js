import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import styles from './Error.module.scss';

const Error = ({ message }) => (
  <div className={styles.root}>
    <Typography variant="h4">{message}</Typography>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;

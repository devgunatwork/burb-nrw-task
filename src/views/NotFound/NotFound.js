import React from 'react';
import Typography from '@material-ui/core/Typography';
import StyledLink from '../../components/StyledLink';

import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.root}>
    <Typography variant="h1">404 - Not Found!</Typography>
    <Typography variant="h4">
      <StyledLink to="/">Go Home</StyledLink> <br />
    </Typography>
  </div>
);

export default NotFound;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import StyledLink from '../../components/StyledLink';
import styles from './HomePage.module.scss';

/**
 * @description component is a landing page
 * */
const HomePage = () => (
  <div className={styles.root}>
    <Typography variant="h1">Shows Available</Typography>
    <Typography variant="h4">
      <StyledLink to="/shows/6771/the-powerpuff-girls">The Powerpuff girls</StyledLink>
    </Typography>
  </div>
);

export default HomePage;

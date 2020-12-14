import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './SplitPageLayout.module.scss';

/**
 * @description common component to split page into fixed LHS with image & scrollable RHS with dynamic content
 * @param children: optional content passed
 * @param imageUrl: url for fixed image on RHS
 * */
const SplitPageLayout = ({ children, imageUrl }) => {
  return (
    <Grid item xs={12}>
      <Grid container className={styles.root}>
        <Grid item xs={6} className={styles.leftSide}>
          <img alt="not available" src={imageUrl} />
        </Grid>
        <Grid item xs={6} className={styles.rightSide}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

SplitPageLayout.defaultProps = {
  children: '',
  imageUrl: '',
};
SplitPageLayout.propTypes = {
  children: PropTypes.node,
  imageUrl: PropTypes.string,
};

export default SplitPageLayout;

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styles from './Details.module.scss';

/**
 * @description common component for details of show/episode
 * @param name: name of show/episode
 * @param summary: summary of show/episode
 * */
const Details = ({ name, summary }) => {
  return (
    <>
      <Typography className={styles.name} variant="h4" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {summary}
      </Typography>
    </>
  );
};

Details.defaultProps = {
  name: '',
  summary: '',
};
Details.propTypes = {
  name: PropTypes.string,
  summary: PropTypes.string,
};

export default Details;

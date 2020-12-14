import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import EpisodeItem from '../EpisodeItem';
import EPISODE_SHAPE from '../../shapes/episode.shape';

const EpisodeList = ({ episodes }) => {
  return (
    <List dense>
      {episodes.map((episode) => (
        <EpisodeItem episode={episode} key={episode.id} />
      ))}
    </List>
  );
};

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(EPISODE_SHAPE).isRequired,
};

export default EpisodeList;

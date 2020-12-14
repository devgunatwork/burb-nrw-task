import React from 'react';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EPISODE_SHAPE from '../../shapes/episode.shape';

const EpisodeItem = ({ episode }) => {
  const { name, number, season, url } = episode;

  return (
    <ListItem alignItems="flex-start">
      <Link target="_blank" href={url} color="inherit">
        <ListItemText primary={`${season}.${number} ${name}`} />
      </Link>
    </ListItem>
  );
};

EpisodeItem.propTypes = {
  episode: EPISODE_SHAPE.isRequired,
};

export default EpisodeItem;

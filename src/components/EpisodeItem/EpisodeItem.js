import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EPISODE_SHAPE from '../../shapes/episode.shape';
import StyledLink from '../StyledLink';

const EpisodeItem = ({ episode }) => {
  const { id, name, number, season } = episode;

  return (
    <ListItem alignItems="flex-start">
      <StyledLink to={`/episode/${id}`}>
        <ListItemText primary={`${season}.${number} ${name}`} />
      </StyledLink>
    </ListItem>
  );
};

EpisodeItem.propTypes = {
  episode: EPISODE_SHAPE.isRequired,
};

export default EpisodeItem;

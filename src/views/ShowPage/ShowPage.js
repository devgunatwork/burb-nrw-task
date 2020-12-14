import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Details from '../../components/Details';
import EpisodeList from '../../components/EpisodeList';
import SplitPageLayout from '../../components/SplitPageLayout';
import { episodeListSample, showPageSampleResponse } from './sampleResponse';

/**
 * @description component is container for show page
 * */
const ShowPage = () => {
  const { id } = useParams();
  const {
    image: { original },
    name,
    summary,
  } = showPageSampleResponse;

  return (
    <SplitPageLayout imageUrl={original}>
      <Details name={name} summary={summary} id={id} />
      <Typography variant="h5">EPISODE LIST:</Typography>
      <EpisodeList episodes={episodeListSample} />
    </SplitPageLayout>
  );
};

export default ShowPage;

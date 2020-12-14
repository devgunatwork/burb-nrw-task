import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Details from '../../components/Details';
import EpisodeList from '../../components/EpisodeList';
import SplitPageLayout from '../../components/SplitPageLayout';
import checkImageUrl from '../../utils/checkImageUrl';
import { episodeListSample, showPageSampleResponse } from './sampleResponse';

/**
 * @description component is container for show page
 * */
const ShowPage = () => {
  const { showId } = useParams();
  const { image, name, summary } = showPageSampleResponse;
  const url = checkImageUrl(image);

  return (
    <SplitPageLayout imageUrl={url}>
      <Details name={name} summary={summary} id={showId} />
      <Typography variant="h5">EPISODE LIST:</Typography>
      <EpisodeList episodes={episodeListSample} />
    </SplitPageLayout>
  );
};

export default ShowPage;

import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Details from '../../components/Details';
import SplitPageLayout from '../../components/SplitPageLayout';
import checkImageUrl from '../../utils/checkImageUrl';
import { episodeDetailPageSampleResponse } from '../ShowPage/sampleResponse';

/**
 * @description component is container for episode detail page
 * */
const EpisodeDetailPage = () => {
  const { episodeId } = useParams();
  const { image, name, summary } = episodeDetailPageSampleResponse;
  const url = checkImageUrl(image);

  return (
    <SplitPageLayout imageUrl={url}>
      <Typography variant="h5">EPISODE DETAILS</Typography>
      <Details name={name} summary={summary} id={episodeId} />
    </SplitPageLayout>
  );
};

export default EpisodeDetailPage;

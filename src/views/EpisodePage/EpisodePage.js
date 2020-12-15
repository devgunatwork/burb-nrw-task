import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Details from '../../components/Details';
import SplitPageLayout from '../../components/SplitPageLayout';
import checkImageUrl from '../../utils/checkImageUrl';
import { FAILED, LOADING } from '../../constants/apiState.constants';
import { EPISODE_FETCH_REQUESTED } from '../../state/types/episodeSaga.type';

/**
 * @description component is container for episode detail page
 * */
const EpisodePage = () => {
  const { details, status: episodeRequestStatus } = useSelector((state) => state.episode);
  const { image, name, summary } = details;
  const url = checkImageUrl(image);
  const { episodeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: EPISODE_FETCH_REQUESTED, payload: { episodeId } });
  }, [episodeId, dispatch]);

  if (episodeRequestStatus === LOADING) return <Loader />;
  if (episodeRequestStatus === FAILED) return <Error message="Failed to fetch episode details" />;
  return (
    <SplitPageLayout imageUrl={url}>
      <Typography variant="h5">EPISODE DETAILS</Typography>
      <Details name={name} summary={summary} id={episodeId} />
    </SplitPageLayout>
  );
};

export default EpisodePage;

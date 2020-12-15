import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Loader from '../../components/Loader';
import Details from '../../components/Details';
import EpisodeList from '../../components/EpisodeList';
import SplitPageLayout from '../../components/SplitPageLayout';
import checkImageUrl from '../../utils/checkImageUrl';
import { episodeListSample } from './sampleResponse';
import { SHOW_FETCH_REQUESTED } from '../../state/types/showSaga.type';
import { FAILED, IDLE, LOADING } from '../../constants/apiState.constants';
import Error from '../../components/Error';

/**
 * @description component is container for show page
 * */
const ShowPage = () => {
  const dispatch = useDispatch();
  const { showId } = useParams();
  const showStatus = useSelector((state) => state.show.status);
  const showDetails = useSelector((state) => state.show.details);
  const { image, name, summary } = showDetails;
  const url = checkImageUrl(image);

  useEffect(() => {
    if (showStatus === IDLE) {
      dispatch({ type: SHOW_FETCH_REQUESTED, payload: { showId } });
    }
  }, [dispatch, showId, showStatus]);

  if (showStatus === LOADING) return <Loader />;
  if (showStatus === FAILED) return <Error message="Failed to fetch show details" />;
  return (
    <SplitPageLayout imageUrl={url}>
      <Details name={name} summary={summary} id={showId} />
      <Typography variant="h5">EPISODE LIST:</Typography>
      <EpisodeList episodes={episodeListSample} />
    </SplitPageLayout>
  );
};

export default ShowPage;

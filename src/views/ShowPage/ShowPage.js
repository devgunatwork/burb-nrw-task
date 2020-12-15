import React, { useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Details from '../../components/Details';
import EpisodeList from '../../components/EpisodeList';
import SplitPageLayout from '../../components/SplitPageLayout';
import checkImageUrl from '../../utils/checkImageUrl';
import { FAILED, LOADING } from '../../constants/apiState.constants';
import { SHOW_FETCH_REQUESTED } from '../../state/types/showSaga.type';
import { EPISODE_LIST_FETCH_REQUESTED } from '../../state/types/episodeListSaga.type';

/**
 * @description component is container for show page
 * */
const ShowPage = () => {
  const {
    show: { details, status: showRequestStatus },
    episodeList: { list },
  } = useSelector((state) => ({
    show: state.show,
    episodeList: state.episodeList,
  }));
  const { image, name, summary } = details;
  const url = checkImageUrl(image);
  const { showId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    batch(() => {
      dispatch({ type: SHOW_FETCH_REQUESTED, payload: { showId } });
      dispatch({ type: EPISODE_LIST_FETCH_REQUESTED, payload: { showId } });
    });
  }, [showId, dispatch]);

  if (showRequestStatus === LOADING) return <Loader />;
  if (showRequestStatus === FAILED) return <Error message="Failed to fetch show details" />;
  return (
    <SplitPageLayout imageUrl={url}>
      <Details name={name} summary={summary} id={showId} />
      <Typography variant="h5">EPISODE LIST:</Typography>
      <EpisodeList episodes={list} />
    </SplitPageLayout>
  );
};

export default ShowPage;

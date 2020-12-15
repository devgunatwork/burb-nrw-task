const { REACT_APP_TVMAZE_ROOT_URL } = process.env;
const GET_SHOW_URL = `${REACT_APP_TVMAZE_ROOT_URL}/shows`;
const GET_EPISODE_URL = `${REACT_APP_TVMAZE_ROOT_URL}/episodes`;

export { GET_SHOW_URL, GET_EPISODE_URL };

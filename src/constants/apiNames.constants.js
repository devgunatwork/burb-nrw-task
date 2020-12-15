const { REACT_APP_TVMAZE_ROOT_URL } = process.env;
const GET_SHOW_URL = `${REACT_APP_TVMAZE_ROOT_URL}/shows`;
const EPISODE_ENDPOINT = `/episodes`;

export { GET_SHOW_URL, EPISODE_ENDPOINT };

import React from 'react';
import { useSelector } from 'react-redux';
import { initialState as episodeInitalState } from './episodeSlice';
import EpisodePage from './EpisodePage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    episodeId: '1234',
  }),
}));
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('views', () => {
  describe('EpisodePage', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        useSelector.mockImplementation((selector) => selector({ episode: episodeInitalState }));
        const wrapper = shallow(<EpisodePage />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

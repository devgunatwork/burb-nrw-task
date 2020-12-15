import React from 'react';
import { useSelector } from 'react-redux';
import ShowPage from './ShowPage';
import { initialState as showInitialState } from './showSlice';
import { initialState as episodeListInitialState } from './episodeListSlice';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    showId: '1234',
  }),
}));
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('views', () => {
  describe('ShowPage', () => {
    describe('UI', () => {
      it('should match the snapshot when loading', () => {
        useSelector.mockImplementation((selector) =>
          selector({ show: showInitialState, episodeList: episodeListInitialState })
        );
        const wrapper = shallow(<ShowPage />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

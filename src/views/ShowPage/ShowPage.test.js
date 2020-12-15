import React from 'react';
import { useSelector } from 'react-redux';
import ShowPage from './ShowPage';
import { initialState } from './showSlice';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1234',
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
        useSelector.mockImplementation((selector) => selector({ show: initialState }));
        const wrapper = shallow(<ShowPage />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

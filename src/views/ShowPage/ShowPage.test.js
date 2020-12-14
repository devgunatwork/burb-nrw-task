import React from 'react';
import ShowPage from './ShowPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1234',
  }),
}));

describe('views', () => {
  describe('ShowPage', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(<ShowPage />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

import React from 'react';
import EpisodePage from './EpisodePage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1234',
  }),
}));

describe('views', () => {
  describe('EpisodePage', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(<EpisodePage />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

import React from 'react';
import EpisodeDetailPage from './EpisodeDetailPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1234',
  }),
}));

describe('views', () => {
  describe('EpisodeDetailPage', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(<EpisodeDetailPage />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

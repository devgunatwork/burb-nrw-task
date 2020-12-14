import React from 'react';
import ShowPage from './ShowPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    companyId: 'company-id1',
    teamId: 'team-id1',
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

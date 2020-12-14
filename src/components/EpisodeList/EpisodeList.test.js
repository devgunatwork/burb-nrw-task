import React from 'react';
import EpisodeList from './EpisodeList';

describe('components', () => {
  describe('EpisodeList', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(
          <EpisodeList
            episodes={[
              {
                id: 123,
                url: 'test url',
                name: 'name',
                season: 1,
                number: 1,
              },
            ]}
          />
        );

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

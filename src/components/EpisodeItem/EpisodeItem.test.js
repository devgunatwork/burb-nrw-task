import React from 'react';
import EpisodeItem from './EpisodeItem';

describe('components', () => {
  describe('EpisodeItem', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(
          <EpisodeItem
            episode={{
              id: 123,
              url: 'test url',
              name: 'name',
              season: 1,
              number: 1,
            }}
          />
        );

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

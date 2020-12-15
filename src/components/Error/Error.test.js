import React from 'react';
import Error from './Error';

describe('components', () => {
  describe('Error', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(<Error message="Failed to fetch" />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

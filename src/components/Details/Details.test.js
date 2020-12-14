import React from 'react';
import Details from './Details';

describe('components', () => {
  describe('Details', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(<Details />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

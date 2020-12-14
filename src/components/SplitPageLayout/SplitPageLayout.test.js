import React from 'react';
import SplitPageLayout from './SplitPageLayout';

describe('components', () => {
  describe('SplitPageLayout', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(<SplitPageLayout />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

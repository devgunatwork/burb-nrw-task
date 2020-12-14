import React from 'react';
import HomePage from './HomePage';

describe('views', () => {
  describe('HomePage', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(<HomePage />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

import React from 'react';
import NotFound from './NotFound';

describe('views', () => {
  describe('NotFound', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(<NotFound />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

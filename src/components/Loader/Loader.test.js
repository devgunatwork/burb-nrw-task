import React from 'react';
import Loader from './Loader';

describe('components', () => {
  describe('Loader', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(<Loader />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

import React from 'react';
import StyledLink from './StyledLink';

describe('components', () => {
  describe('StyledLink', () => {
    describe('UI', () => {
      it('should match the snapshot', () => {
        const wrapper = shallow(<StyledLink to="/test" />);

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

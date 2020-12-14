import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import App from './App';

it('should render app without crashing', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});

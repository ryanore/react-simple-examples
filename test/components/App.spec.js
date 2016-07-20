import React from 'react';
import App from '../../src/components/App';
import Button from '../../src/components/Button';
import { mount, shallow } from 'enzyme';
import { renderComponent , expect } from '../setup';

describe('<App />' , () => {
  let wrapper = mount(<App />);

  it('should render a button', function() {
    expect(wrapper.contains(<Button />)).to.equal(true);
  });

});

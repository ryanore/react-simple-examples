import React from 'react';
import Button from '../../src/components/Button';
import { mount, shallow } from 'enzyme';
import { renderComponent , expect } from '../setup';

describe('<Button />' , () => {
  let wrapper = mount(<Button />);

  it('should render a button', function() {
    expect(wrapper.find('button')).to.have.length(1);
  });

});

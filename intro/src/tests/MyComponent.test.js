/***
 * Excerpted from "Test-Driven React",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tbreact for more book information.
***/
import React from 'react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders a <div /> tag', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.type()).toBe('div');
  });

  it('accepts a `className` prop', () => {
    const wrapper = shallow(<MyComponent className="test-class" />);
    expect(wrapper.hasClass('test-class')).toBe(true);
  });

  it('triggers `onClick` when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<MyComponent onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});

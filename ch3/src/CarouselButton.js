/***
 * Excerpted from "Test-Driven React",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tbreact for more book information.
***/
import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = props => <button {...props} />; //(1)

CarouselButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarouselButton;

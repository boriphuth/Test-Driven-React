/***
 * Excerpted from "Test-Driven React",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tbreact for more book information.
***/
module.exports = function() {
  return {
    testFramework: 'jest', //(1)

    env: {
      type: 'node', //(2)
    },

    tests: ['tests/**/*.test.js'], //(3)
    files: ['**/*.js', '!node_modules/**/*', '!**/*.test.js', '!**/.*'], //(4)
  };
};

/**
 * This is a TypeScript conversion of a JavaScript code file. It exports a function that takes an api object
 * as a parameter and returns a configuration object for Babel presets using Expo.
 */

/**
 * @typedef {Object} ApiObject - The API object parameter.
 */

/**
 * @typedef {Object} ConfigurationObject - The configuration object returned by the function.
 * @property {Array<string>} presets - The presets to use for Babel.
 */

/**
 * Function that takes an api object and returns a configuration object for Babel presets using Expo.
 *
 * @param {ApiObject} api - The API object.
 * @returns {ConfigurationObject} - The configuration object for Babel presets.
 */
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
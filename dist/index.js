/** @license Apache-2.0 */

'use strict';

/**
* Compute the number of non-`NaN` elements in a strided array.
*
* @module @stdlib/stats-strided-nancount
*
* @example
* var nancount = require( '@stdlib/stats-strided-nancount' );
*
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = nancount( x.length, x, 1 );
* // returns 3
*
* @example
* var nancount = require( '@stdlib/stats-strided-nancount' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
*
* var v = nancount.ndarray( 5, x, 2, 1 );
* // returns 4
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray" }

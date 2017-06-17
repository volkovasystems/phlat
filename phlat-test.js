"use strict";

const assert = require( "assert" );
const phlat = require( "./phlat.js" );

assert.deepEqual( phlat( ), [ ], "should be empty array" );

assert.deepEqual( phlat( [ ] ), [ ], "should be empty array" );

assert.deepEqual( phlat( [ 1, 2, 3, [ 4, 5, 6 ] ] ), [ 1, 2, 3, 4, 5, 6 ], "should be equal" );

( function ( ){
	assert.deepEqual( phlat( arguments ), [ ], "should be empty array" );
} )( );

( function ( ){
	assert.deepEqual( phlat( arguments ), [ "hello", "world", 1, 2, 3, "yeah", 4, 5, 6 ], "should be equal" );
} )( ["hello", ["world"],1,2,3], ["yeah",4,5,6] );

assert.deepEqual( phlat( [ 1, 2, 3, [ 4, 5, 6 ], [ [ [ null ] ] ] ] ), [ 1, 2, 3, 4, 5, 6, null ], "should be equal" );

console.log( "ok" );

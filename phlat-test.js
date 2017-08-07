
const assert = require( "assert" );
const phlat = require( "./phlat.js" );

assert.deepEqual( phlat( ), [ ], "should be equal to empty array" );

assert.deepEqual( phlat( [ ] ), [ ], "should be equal to empty array" );

assert.deepEqual( phlat( [ 1, 2, 3, [ 4, 5, 6 ] ] ), [ 1, 2, 3, 4, 5, 6 ], "should be equal to [ 1, 2, 3, 4, 5, 6 ]" );

( function ( ){
	assert.deepEqual( phlat( arguments ), [ ], "should be equal to empty array" );
} )( );

( function ( ){

	assert.deepEqual( phlat( arguments ),
	[ "hello", "world", 1, 2, 3, "yeah", 4, 5, 6 ],
	"should be equal to [ 'hello', 'world', 1, 2, 3, 'yeah', 4, 5, 6 ]" );

} )( ["hello", ["world"],1,2,3], ["yeah",4,5,6] );

assert.deepEqual( phlat( [ 1, 2, 3, [ 4, 5, 6 ], [ [ [ null ] ] ] ] ),
	[ 1, 2, 3, 4, 5, 6, null ], "should be equal to [ 1, 2, 3, 4, 5, 6, null ]" );

console.log( "ok" );

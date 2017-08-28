"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "phlat",
			"path": "phlat/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/phlat.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"phlat": "phlat"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const phlat = require( "./phlat.js" );
//: @end-server

//: @client:
const phlat = require( "./phlat.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "phlat", ( ) => {

	describe( "`phlat( )`", ( ) => {
		it( "should be equal to empty array", ( ) => {

			assert.deepEqual( phlat( ), [ ] );

		} );
	} );

	describe( "`phlat( [ ] )`", ( ) => {
		it( "should be equal to empty array", ( ) => {

			assert.deepEqual( phlat( [ ] ), [ ] );

		} );
	} );

	describe( "`phlat( [ 1, 2, 3, [ 4, 5, 6 ] ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5, 6 ]", ( ) => {

			assert.deepEqual( phlat( [ 1, 2, 3, [ 4, 5, 6 ] ] ), [ 1, 2, 3, 4, 5, 6 ] );

		} );
	} );

	describe( "`phlat( [ 1, 2, 3, [ 4, 5, 6 ], [ [ [ null ] ] ] ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5, 6, null ]", ( ) => {

			assert.deepEqual( phlat( [ 1, 2, 3, [ 4, 5, 6 ], [ [ [ null ] ] ] ] ),
				[ 1, 2, 3, 4, 5, 6, null ] );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "phlat", ( ) => {

	describe( "`phlat( )`", ( ) => {
		it( "should be equal to empty array", ( ) => {

			assert.deepEqual( phlat( ), [ ] );

		} );
	} );

	describe( "`phlat( [ ] )`", ( ) => {
		it( "should be equal to empty array", ( ) => {

			assert.deepEqual( phlat( [ ] ), [ ] );

		} );
	} );

	describe( "`phlat( [ 1, 2, 3, [ 4, 5, 6 ] ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5, 6 ]", ( ) => {

			assert.deepEqual( phlat( [ 1, 2, 3, [ 4, 5, 6 ] ] ), [ 1, 2, 3, 4, 5, 6 ] );

		} );
	} );

	describe( "`phlat( [ 1, 2, 3, [ 4, 5, 6 ], [ [ [ null ] ] ] ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5, 6, null ]", ( ) => {

			assert.deepEqual( phlat( [ 1, 2, 3, [ 4, 5, 6 ], [ [ [ null ] ] ] ] ),
				[ 1, 2, 3, 4, 5, 6, null ] );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "phlat", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`phlat( )`", ( ) => {
		it( "should be equal to empty array", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( phlat( ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ ] );

		} );
	} );

	describe( "`phlat( [ ] )`", ( ) => {
		it( "should be equal to empty array", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( phlat( [ ] ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ ] );

		} );
	} );

	describe( "`phlat( [ 1, 2, 3, [ 4, 5, 6 ] ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5, 6 ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( phlat( [ 1, 2, 3, [ 4, 5, 6 ] ] ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ 1, 2, 3, 4, 5, 6 ] );

		} );
	} );

	describe( "`phlat( [ 1, 2, 3, [ 4, 5, 6 ], [ [ [ null ] ] ] ] )`", ( ) => {
		it( "should be equal to [ 1, 2, 3, 4, 5, 6, null ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( phlat( [ 1, 2, 3, [ 4, 5, 6 ], [ [ [ null ] ] ] ] ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ 1, 2, 3, 4, 5, 6, null ] );

		} );
	} );

} );

//: @end-bridge

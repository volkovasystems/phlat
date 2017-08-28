"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "phlat",
              			"path": "phlat/phlat.js",
              			"file": "phlat.js",
              			"module": "phlat",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/phlat.git",
              			"test": "phlat-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Flatten arrays, preserve structure.
              	@end-module-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"doubt": "doubt",
              			"raze": "raze"
              		}
              	@end-include
              */

var arid = require("arid");
var doubt = require("doubt");
var raze = require("raze");

var phlat = function phlat(array) {
	/*;
                                   	@meta-configuration:
                                   		{
                                   			"array:required": [
                                   				"[*]",
                                   				"..."
                                   			]
                                   		}
                                   	@end-meta-configuration
                                   */

	array = raze(arguments);

	if (arid(array)) {
		return array;
	}

	return array.reduce(function flatten(previous, current) {
		var element = doubt(current, AS_ARRAY) ? phlat.apply(null, current) : current;

		return previous.concat(element);
	}, []);
};

module.exports = phlat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBobGF0LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXJpZCIsInJlcXVpcmUiLCJkb3VidCIsInJhemUiLCJwaGxhdCIsImFycmF5IiwiYXJndW1lbnRzIiwicmVkdWNlIiwiZmxhdHRlbiIsInByZXZpb3VzIiwiY3VycmVudCIsImVsZW1lbnQiLCJBU19BUlJBWSIsImFwcGx5IiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDcEM7Ozs7Ozs7Ozs7O0FBV0FBLFNBQVFGLEtBQU1HLFNBQU4sQ0FBUjs7QUFFQSxLQUFJTixLQUFNSyxLQUFOLENBQUosRUFBbUI7QUFDbEIsU0FBT0EsS0FBUDtBQUNBOztBQUVELFFBQU9BLE1BQU1FLE1BQU4sQ0FBYyxTQUFTQyxPQUFULENBQWtCQyxRQUFsQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFDekQsTUFBSUMsVUFBVVQsTUFBT1EsT0FBUCxFQUFnQkUsUUFBaEIsSUFBNEJSLE1BQU1TLEtBQU4sQ0FBYSxJQUFiLEVBQW1CSCxPQUFuQixDQUE1QixHQUEyREEsT0FBekU7O0FBRUEsU0FBT0QsU0FBU0ssTUFBVCxDQUFpQkgsT0FBakIsQ0FBUDtBQUNBLEVBSk0sRUFJSixFQUpJLENBQVA7QUFLQSxDQXZCRDs7QUF5QkFJLE9BQU9DLE9BQVAsR0FBaUJaLEtBQWpCIiwiZmlsZSI6InBobGF0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInBobGF0XCIsXG5cdFx0XHRcInBhdGhcIjogXCJwaGxhdC9waGxhdC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwicGhsYXQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicGhsYXRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3BobGF0LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwicGhsYXQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRGbGF0dGVuIGFycmF5cywgcHJlc2VydmUgc3RydWN0dXJlLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5cbmNvbnN0IHBobGF0ID0gZnVuY3Rpb24gcGhsYXQoIGFycmF5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiWypdXCIsXG5cdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRhcnJheSA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBhcmlkKCBhcnJheSApICl7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cblx0cmV0dXJuIGFycmF5LnJlZHVjZSggZnVuY3Rpb24gZmxhdHRlbiggcHJldmlvdXMsIGN1cnJlbnQgKXtcblx0XHRsZXQgZWxlbWVudCA9IGRvdWJ0KCBjdXJyZW50LCBBU19BUlJBWSApPyBwaGxhdC5hcHBseSggbnVsbCwgY3VycmVudCApIDogY3VycmVudDtcblxuXHRcdHJldHVybiBwcmV2aW91cy5jb25jYXQoIGVsZW1lbnQgKTtcblx0fSwgWyBdICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBobGF0O1xuIl19
//# sourceMappingURL=phlat.support.js.map

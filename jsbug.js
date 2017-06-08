// This is free and unencumbered software released into the public domain.

// Anyone is free to copy, modify, publish, use, compile, sell, or
// distribute this software, either in source code form or as a compiled
// binary, for any purpose, commercial or non-commercial, and by any
// means.

// In jurisdictions that recognize copyright laws, the author or authors
// of this software dedicate any and all copyright interest in the
// software to the public domain. We make this dedication for the benefit
// of the public at large and to the detriment of our heirs and
// successors. We intend this dedication to be an overt act of
// relinquishment in perpetuity of all present and future rights to this
// software under copyright law.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
// OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.
(function(name, definition) {
  if (typeof module != 'undefined') module.exports = definition();
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
  else this[name] = definition();
}('mod', function() {
  "use strict";
  
  // Default styling
  var style = "color: #fff;font-size:12pt;font-weight:normal;padding:2px 10px;border-radius:10px;";

  // Turn on
  if (window.location.href.indexOf("jsbug=true") > -1) {
    localStorage.setItem("jsbug", true);
  }

  // Turn off
  if (window.location.href.indexOf("jsbug=false") > -1) {
    localStorage.setItem("jsbug", false);
  }

  if (localStorage.getItem("jsbug") !== null) {
    window.console.log("%c! Debug enabled. Set jsbug=false to turn off", style + "background:#002C6D");
  }

  return function(str, options) {
    if (localStorage.getItem("jsbug") !== null) {
      options = options || {};
      var background = "#0088CF";
      var prepend = "♢";
      
      // Success/failure. Defaults to green/red, with predefined prepend
      if (typeof options.success !== "undefined") {
        background = options.success ? "#00A551" : "#EC1C24";
        prepend = options.success ? "*" : "@ Failure!";
      }
      
      // Color override
      if (options.color) {
        background = options.color
      }
      
      // Prepend override
      if (options.prepend) {
        prepend = options.prepend
      }
      
      if (typeof options.group !== "undefined") {
        window.console.groupCollapsed("%c" + prepend + " " + str, style + "background:" + background);
        for (var i = 0; i < options.group.length; i++){
          window.console.log(options.group[i]);
        }
        window.console.groupEnd();
      } else {
        window.console.log("%c" + prepend + " " + str, style + "background:" + background);
      }
    }
  }
}));

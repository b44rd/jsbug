/*
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
define([], function () {

    "use strict";

    var i, color, fontsize, background, prepend, jsbug = localStorage.getItem("jsbug") !== null;

    // Turn on
    if (window.location.href.indexOf("jsbug=true") > -1) {
        localStorage.setItem("jsbug", true);
        jsbug = true;
    }

    // Turn off
    if (window.location.href.indexOf("jsbug=false") > -1) {
        localStorage.setItem("jsbug", false);
        jsbug = false;
    }

    if (jsbug) {
        window.console.log("%cDebug console turned on. Add ?jsbug=false to url to turn off", "color:#fff; background:#002C6D; font-size:15pt; font-weight: normal;");
    }

    return function(str, options) {
        if (jsbug) {
            options = options || {};
            background = str.indexOf("|") === 0 ? "#FCB813" : "#0088CF";
            background = options.timer ? "#fff": background;
            color = options.timer ? "#ccc" : "#fff";
            fontsize = options.timer ? 8 : 12;
            prepend = "";

            if (typeof options.success !== "undefined") {
                background = options.success ? "#00A551" : "#EC1C24";
                prepend = options.success ? "* " : "@ Failure! ";
            }

            if (typeof options.group !== "undefined") {
                window.console.group("%c" + prepend + str, "color:" + color + "; background:" + background + "; font-size:" + fontsize + "pt; font-weight: normal;");
                  for (i = 0; i < options.group.length; i++){
                      window.console.log(options.group[i]);
                  }
                window.console.groupEnd();
            } else {
                window.console.log("%c" + prepend + str, "color:" + color + "; background:" + background + "; font-size:" + fontsize + "pt; font-weight: normal;");
            }
        }
    };
});

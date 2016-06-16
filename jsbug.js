define(['jquery'], function ($) {

    "use strict";

    var jsbug = localStorage.getItem("jsbug") !== null;

    // Turn on
    if (window.location.href.indexOf("jsbug=true") > -1){
        localStorage.setItem("jsbug", true);
        jsbug = true;
    }

    // Turn off
    if (window.location.href.indexOf("jsbug=false") > -1){
        localStorage.setItem("jsbug", false);
        jsbug = false;
    }

    if (jsbug){
        console.log('%cDebug console turned on. Add ?jsbug=false to url to turn off', 'color:#fff; background:#002C6D; font-size:15pt; font-weight: normal;'); // jshint ignore:line
    }

    return function(str, options){
        if (jsbug) {
            options = options || {};

            var background = str.indexOf("|") === 0 ? '#FCB813' : '#0088CF',
                prepend = '';

            if (typeof options.success !== 'undefined'){
                background = options.success ? '#00A551' : '#EC1C24';
                prepend = options.success ? '* ' : '@ Failure! ';
            }

            if (typeof options.group !== 'undefined'){
                console.group('%c' + prepend + str, 'color:#fff; background:' + background + '; font-size:12pt; font-weight: normal;'); // jshint ignore:line
                  $.each(options.group, function(){
                      console.log(this); // jshint ignore:line
                  });
                console.groupEnd(); // jshint ignore:line
            } else {
                console.log('%c' + prepend + str, 'color:#fff; background:' + background + '; font-size:12pt; font-weight: normal;'); // jshint ignore:line
            }
        }
    };
});

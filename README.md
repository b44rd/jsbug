# Simple, colorful javascript debugging on demand

##### Append ?jsbug=true to url to start the party. Add ?jsbug=false to make it stop

![alt tag](https://raw.githubusercontent.com/b44rd/jsbug/master/screenshot.png)

### Make it a part of the project
```javascript
var debug = require("jsbug");
```

### Usage

##### Basic debugging
```javascript
// Print "Hello debugger" using blue color
debug("Hello debugger"); 
```

##### Indicate ajax calls (start msg with a pipe)
```javascript
// Print "| Requesting api" using yellow color
debug("| Requesting API"); 
```

##### Indicate success
```javascript
// Print "* JSON returned" using green color
debug("API data returned", { success: true }); 
```

##### Indicate failure
```javascript
// Print @ Failure: API returned unexpected dataset using red color
debug("API returned unexpected dataset", { success: false }); 
```

##### Indicate failure + Attach response object to message (collapsable)
```javascript
// Print @ Failure: API returned unexpected dataset using red color and make response object inspectable
debug("API returned unexpected dataset", { success: false, group: [response] }); 

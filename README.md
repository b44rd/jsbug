# Simple, colorful javascript debugging on demand

##### Append ?jsbug=true to url to start the party. Add ?jsbug=false to make it stop

### Make it a part of the project
```javascript
var jsbug = require("jsbug");
```

### Usage

##### Basic debugging
```javascript
// Print "Hello debugger" (blue)
debug("Hello debugger"); 
```

##### Indicate ajax calls (start msg with a pipe)
```javascript
// Print "| Requesting api" (yellow)
debug("| Requesting API"); 
```

##### Indicate success
```javascript
// Print "* JSON returned" using green color
debug("API data returned", { success: true }); 
```

##### Indicate failure
```javascript
// Print @ Failure: API returned unexpected dataset
debug("API returned unexpected dataset", { success: false }); 
```

##### Indicate failure + Attach response object to message (collapsable)
```javascript
// Print @ Failure: API returned unexpected dataset and make response object inspectable
debug("API returned unexpected dataset", { success: false, group: [response] }); 

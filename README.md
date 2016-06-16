# Simple, colorful javascript debugging on demand

##### Append ?jsbug=true to url to start the party. Add ?jsbug=false to make it stop

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

##### Indicate failure with grouped, inspectable properties
```javascript
// Print @ Failure: API returned unexpected dataset using red color and make response object inspectable
debug("API returned unexpected dataset", { success: false, group: [response] }); 
```

##### Screenshot from Google Chrome
![Screenshot](https://raw.githubusercontent.com/b44rd/jsbug/master/screenshot.png)

##### Support
All modern browsers + IE11 and up (currently). Feel free to contribute! 

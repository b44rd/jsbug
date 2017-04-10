# Simple, colorful javascript debugging on demand

##### Append ?jsbug=true to url to start the party. Add ?jsbug=false to make it stop

### Make it a part of the project
```javascript
// Require it
var debug = require("jsbug");

// Or import it
import debug from 'jsbug'
```

### Usage

##### Basic debugging
```javascript
// Print "♢ Clicked a button" using blue color
debug("Clicked a button"); 
```

##### Indicate ajax calls (start msg with a pipe)
```javascript
// Print "| Requesting api" using yellow color
debug("| Requesting API"); 
```

##### Indicate success
```javascript
// Print "* JSON returned" using green color
debug("JSON returned", { success: true }); 
```

##### Indicate failure
```javascript
// Print @ Failure! API returned unexpected dataset using red color
debug("API returned unexpected dataset", { success: false }); 
```

##### Indicate failure with grouped, inspectable properties
```javascript
// Print @ Failure: API returned unexpected dataset using red color and make response object inspectable
debug("API returned unexpected dataset", { success: false, group: [response] }); 
```

### Screenshots

##### Sample code
![Screenshot](https://raw.githubusercontent.com/b44rd/jsbug/master/samplecode.png)

##### Result
![Screenshot](https://raw.githubusercontent.com/b44rd/jsbug/master/collapsed.png)

##### Result (collapsed)
![Screenshot](https://raw.githubusercontent.com/b44rd/jsbug/master/expanded.png)

### Support
Most modern browsers. Feel free to contribute! 

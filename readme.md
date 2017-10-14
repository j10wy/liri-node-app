# LIRI (Language Interpretation and Recognition Interface) 

LIRI is a command line Node application that takes in parameters (via command line arguments or file input) to display tweets, songs from Spotify, and movie information from OMDB.

### Make LIRI speak using Node's child_process.spawn 
```javascript
const spawn = require("child_process").spawn;
spawn("say",["What up!"]);
```

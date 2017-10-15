# LIRI (Language Interpretation and Recognition Interface) 

LIRI is a command line Node application that takes in parameters (via command line arguments or file input) to display tweets, songs from Spotify, and movie information from OMDB.

---------------------------
[![NPM](https://nodei.co/npm/liri-cli.png)](https://www.npmjs.com/package/liri-cli)


[![npm version](https://badge.fury.io/js/liri-cli.svg)](https://www.npmjs.com/package/liri-cli)
[![npm](https://img.shields.io/npm/dt/liri-cli.svg)](https://www.npmjs.com/package/liri-cli)
[![GitHub last commit](https://img.shields.io/github/last-commit/jeffreylowy/liri-node-app.svg)](https://github.com/jeffreylowy/liri-node-app)

---------------------------

### Make LIRI speak using Node's child_process.spawn 
```javascript
const spawn = require("child_process").spawn;
spawn("say",["What up!"]);
```

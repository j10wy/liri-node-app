const fs = require('fs');
const inquirer = require("inquirer");

let files = fs.readdirSync(".", 'utf8');
let hasEnv = false;

files.find(item => {
	if (item === '.env2') {
		hasEnv = true;
	}
})

if (!hasEnv) {
	inquirer.prompt([{
		type: 'input',
		name: 'omdb',
		message: "Enter your OMDB API key"
	}]);
} else {
	console.log("Yes! You have a .env file");
}
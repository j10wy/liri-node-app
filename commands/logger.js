const fs = require('fs');

function log_data(textToLog) {
	fs.appendFile("./history.log", textToLog, (error, data) => {
		if (error) throw Error("Something went wrong while logging data.")
	});
}

function log_command(arguments) {
	let command = arguments[2];
	let value = arguments[3];
	let logCommandText = `\n*** Command: ${command} | Value: ${value} ***\n`
	fs.appendFile("./history.log", logCommandText, (error, data) => {
		if (error) throw Error("Something went wrong while logging history.")
	});
}

module.exports = {
	log_data: log_data,
	log_command: log_command
};
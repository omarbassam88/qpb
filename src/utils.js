const fs = require('fs')
const process = require('process')
const { spawnSync } = require('child_process');

function createDir(dirName) {
	fs.mkdirSync(dirName, { recursive: true })
}

function chDir(dirName) {
	process.chdir(dirName);
}

function runCommand(commandStr) {
	const command = commandStr.split(' ')
	spawnSync(command[0], command.slice(1), {
		stdio: 'inherit',
	});

}

module.exports = {
	createDir,
	chDir,
	runCommand
}

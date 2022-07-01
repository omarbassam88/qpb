const prompts = require('prompts');
const { bold, cyan, blue } = require('kolorist');
const { projects, categories } = require('./projects');
const { runCommand } = require('./utils');

function welcome() {
	console.log(
		`Welcome to ${bold(
			cyan('Quick Project Builder')
		)}\nLet's Build Awesome Stuff`
	);
}

async function main() {
	welcome();
	// Prompt User for Project Parameters
	const answers = await prompts([
		{
			type: 'select',
			name: 'category',
			message: `${bold(blue('What are we building today ?'))}`,
			choices: categories,
		},
		{
			type: 'select',
			name: 'framework',
			message: `${bold('Which framework do you prefer working with ?')}`,
			choices: (prev) => projects.filter((proj) => proj.category === prev),
		},
		{
			type: 'select',
			name: 'variant',
			message: `${bold('Which framework would you like to choose ?')}`,
			choices: (prev) =>
				projects.find((proj) => proj.value === prev)['variants'],
		},
		{
			type: 'text',
			name: 'projectName',
			initial: 'qpb-project',
			message: `${bold('Please Choose Your Project Name: ')}`,
		}
	]);

	const selectedProject = projects
		.find((proj) => proj.value === answers['framework'])['variants']
		.find((variant) => variant.value === answers['variant']);

	// project command can either be a string or a function
	if (typeof selectedProject['command'] === 'string') {
		runCommand(`${selectedProject['command']} ${answers['projectName']}`)
	} else {
		selectedProject['command'](answers['projectName']);
	}
}

main();

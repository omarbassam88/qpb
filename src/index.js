const { spawnSync } = require('child_process');
const prompts = require('prompts');
const { bold, cyan, green, red, blue } = require('kolorist');
const { projects, categories } = require('./projects');

function welcome() {
  spawnSync('date', [], {
    stdio: 'inherit',
  });
  console.log(
    `Welcome to ${bold(
      cyan('Quick Project Builder')
    )}\nLet's Build Awesome Stuff`
  );
}

async function main() {
  welcome();
  const answers = await prompts([
    {
      type: 'select',
      name: 'category',
      message: `${bold(blue('What are we building today'))}`,
      choices: categories,
    },
    {
      type: 'select',
      name: 'framework',
      message: `${bold('Which framework do you prefer working with')}`,
      choices: (prev) => projects.filter((proj) => proj.category === prev),
    },
    {
      type: 'select',
      name: 'variant',
      message: `${bold('Which framework would you like to choose')}`,
      choices: (prev) =>
        projects.find((proj) => proj.value === prev)['variants'],
    },
  ]);

  const selectedProject = projects
    .find((proj) => proj.value === answers['framework'])
  ['variants'].find((variant) => variant.value === answers['variant']);

  const command = selectedProject['command'];

  spawnSync(command.split(' ')[0], command.split(' ').slice(1), {
    stdio: 'inherit',
  });
}

main();

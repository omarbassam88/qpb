const { spawnSync } = require('child_process');
const prompts = require('prompts');
const { bold, cyan, green, red, blue } = require('kolorist');

function welcome() {
  console.log(
    `Welcome to ${bold(
      cyan('Quick Project Builder')
    )}\nLet's Builde Awesome Stuff`
  );
}

async function main() {
  spawnSync('date', [], {
    stdio: 'inherit',
  });
  welcome();
  const answers = await prompts([
    {
      type: 'select',
      name: 'category',
      message: `${bold('What are we building today')}`,
      choices: [
        {
          title: green('Node JS'),
          description: 'A Basic Node JS App',
          value: 'node',
        },
        {
          title: red('Front End App'),
          description: 'A Basic Frontend Web App',
          value: 'frontend',
        },
        {
          title: blue('Desktop'),
          description: 'A Basic Desktop App',
          value: 'desktop',
        },
      ],
    },
  ]);

  switch (answers['category']) {
    case 'frontend':
      spawnSync('npm', ['init', 'vite'], { stdio: 'inherit' });
      break;
    default:
      console.log(`Your Selection ${answers['category']} is not yet available`);
      break;
  }
}

main();

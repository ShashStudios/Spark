#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const program = require('commander');

program
  .version('1.0.0')
  .argument('<project-name>', 'Name of the project')
  .action((projectName) => {
    const projectPath = path.resolve(process.cwd(), projectName);

    // Copy the template to the target directory
    fs.copySync(path.resolve(__dirname, 'template'), projectPath);

    // Install dependencies
    console.log(chalk.green('Installing dependencies...'));
    execSync('npm install', { stdio: 'inherit', cwd: projectPath });

    console.log(chalk.green(`Project ${projectName} created successfully!`));
  });

program.parse(process.argv);

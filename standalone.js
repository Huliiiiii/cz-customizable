#!/usr/bin/env node

const { execSync } = require('child_process');
const inquirer = require('inquirer');

const app = require('./index');
const log = require('./lib/logger');

log.info('cz-customizable standalone version');

const commit = (commitMessage) => {
  try {
    const msg = commitMessage
      .split('\n')
      .map((n) => `-m '${n}'`)
      .join(' ');
    execSync(`git commit -m "${msg}"`, { stdio: [0, 1, 2] });
  } catch (error) {
    log.error('>>> ERROR', error.error);
  }
};

app.prompter(inquirer, commit);

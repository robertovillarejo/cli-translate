#!/usr/bin/env node

'use strict'

const translate = require('google-translate-api');
const chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2));

function translateCommand(text, from, to) {
  from = from || 'en';
  to = to || 'es';

  let options = {
    from: from,
    to: to
  }

  translate(text, options)
    .then(res => console.log(chalk.yellow('From ' + translate.languages[res.from.language.iso] + ' to ' + translate.languages[to] + '\n' + res.text)))
    .catch(err => console.error(err));
}

translateCommand(argv._[0], argv._[1], argv._[2]);

import {suma, multiplica} from './controller.js';
import {Chalk} from 'chalk';

const chalk = new Chalk({level: 1});
const log = console.log;

const sum = suma(1,2);
const mult = multiplica(4,5);
console.log(sum);
log(chalk.green(mult));


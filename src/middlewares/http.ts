/**
 * http middleware
 */
import axios from 'axios';
import Debug from 'debug';

const debug = Debug('http');

export default (ctx, next) => {
  debug('run in http middleware');
};

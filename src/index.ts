/**
 * class Spider
 */
import deepExtend from 'deep-extend';

import httpMiddleware from './middlewares/http';

class Spider {
  config = {
    type: 'http',
    // options for axios: https://github.com/axios/axios
    http: {
      method: 'get'
    },
    middlewares: []
  };

  constructor(options: object) {
    this.config = deepExtend({}, this.config, options);
  }

  run(options: object) {
    const config = deepExtend({}, this.config, options);
  }
}

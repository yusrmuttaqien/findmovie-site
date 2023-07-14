'use strict';

module.exports = {
  process(src, filename) {
    return { code: `module.exports = {};` };
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};

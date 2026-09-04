const { readHostConfig } = require('./config/host-config.cjs');

const hostConfig = readHostConfig(__dirname);

module.exports = {
  project: {
    android: {
      packageName: hostConfig.android.namespace,
    },
  },
};

const path = require('path');
const {
  getDefaultConfig,
  mergeConfig,
} = require('@react-native/metro-config');

const applicationRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');
const workspaceNodeModules = path.join(workspaceRoot, 'node_modules');

module.exports = mergeConfig(getDefaultConfig(applicationRoot), {
  watchFolders: [workspaceRoot],
  resolver: {
    nodeModulesPaths: [workspaceNodeModules],
  },
  server: {
    // Lazy bundle URLs must be addressable for every watched workspace file.
    unstable_serverRoot: workspaceRoot,
  },
});

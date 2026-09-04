const fs = require('fs');
const path = require('path');

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const configFileName = 'host.config.json';

function readHostConfig(hostRoot) {
  const configPath = path.join(hostRoot, configFileName);
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  for (const field of ['name', 'displayName', 'entry', 'workspaceRoot', 'deepLinkScheme']) {
    if (typeof config[field] !== 'string' || config[field].length === 0) {
      throw new Error(`${configFileName}: "${field}" must be a non-empty string`);
    }
  }

  for (const field of ['namespace', 'applicationId', 'versionName']) {
    if (typeof config.android?.[field] !== 'string' || config.android[field].length === 0) {
      throw new Error(`${configFileName}: "android.${field}" must be a non-empty string`);
    }
  }

  if (!Number.isInteger(config.android?.versionCode) || config.android.versionCode < 1) {
    throw new Error(`${configFileName}: "android.versionCode" must be a positive integer`);
  }

  return config;
}

function resolveHostPaths(hostRoot, config) {
  const workspaceRoot = path.resolve(hostRoot, config.workspaceRoot);

  return {
    hostRoot,
    workspaceRoot,
    workspaceNodeModules: path.join(workspaceRoot, 'node_modules'),
  };
}

function createHostMetroConfig(hostRoot) {
  const config = readHostConfig(hostRoot);
  const paths = resolveHostPaths(hostRoot, config);

  return mergeConfig(getDefaultConfig(paths.hostRoot), {
    watchFolders: [paths.workspaceRoot],
    resolver: {
      nodeModulesPaths: [paths.workspaceNodeModules],
    },
    server: {
      // Lazy bundle URLs must be addressable for every watched workspace file.
      unstable_serverRoot: paths.workspaceRoot,
    },
  });
}

module.exports = {
  createHostMetroConfig,
  readHostConfig,
  resolveHostPaths,
};

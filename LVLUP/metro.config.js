const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Allow Metro to resolve .cjs files (firebase uses .cjs for some exports)
if (Array.isArray(config.resolver.sourceExts)) {
  config.resolver.sourceExts.push('cjs');
} else if (config.resolver && config.resolver.sourceExts) {
  config.resolver.sourceExts = [...config.resolver.sourceExts, 'cjs'];
}

// Ensure consistent React Native resolution
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'react-native') {
    return context.resolveRequest(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
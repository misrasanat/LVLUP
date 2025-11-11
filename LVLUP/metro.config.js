const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Allow Metro to resolve .cjs files (firebase uses .cjs for some exports)
if (Array.isArray(config.resolver.sourceExts)) {
  config.resolver.sourceExts.push('cjs');
} else if (config.resolver && config.resolver.sourceExts) {
  config.resolver.sourceExts = [...config.resolver.sourceExts, 'cjs'];
}

// Force consistent React Native version
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

// Add node modules that need to be transpiled
config.resolver.assetExts = config.resolver.assetExts || [];
config.resolver.sourceExts = config.resolver.sourceExts || ['js', 'json', 'ts', 'tsx', 'cjs'];

module.exports = config;
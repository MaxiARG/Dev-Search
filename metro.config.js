const { getDefaultConfig } = require('expo/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const { withTamagui } = require('@tamagui/metro-plugin');
const path = require('path');

// Obtener la config base de Metro
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

// Transformer de SVG
config.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer',
);

const { assetExts, sourceExts } = config.resolver;
config.resolver.assetExts = assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...sourceExts, 'svg'];

// Tamagui
const tamaguiConfig = withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
});

// Reanimated + export final
module.exports = wrapWithReanimatedMetroConfig(tamaguiConfig);

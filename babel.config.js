module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@interface': './src/interface',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};

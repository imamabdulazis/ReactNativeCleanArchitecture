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
          '@core': './src/core',
          '@common': './src/core/common',
          '@infra': './src/core/infra',
          '@helper': './src/core/helper',
          '@navigation': './src/core/navigation',
          '@data': './src/feature/data',
          '@domain': './src/features/domain',
          '@presentation': './src/features/presentation',
        },
      },
    ],
  ],
};

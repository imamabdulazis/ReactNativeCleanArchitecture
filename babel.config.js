module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@core': './src/core',
          '@common': './src/core/common',
          '@infra': './src/core/infra',
          '@helper': './src/core/helper',
          '@navigation': './src/core/navigation',
          '@symbols': './src/core/symbols',
          '@data': './src/feature/data',
          '@domain': './src/features/domain',
          '@presentation': './src/features/presentation',
        },
      },
    ],
  ],
};

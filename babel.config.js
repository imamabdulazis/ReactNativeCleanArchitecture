module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@data": "./src/features/data",
          "@domain": "./src/features/domain",
          "@di": "./src/features/di",
          "@presentation": "./src/features/presentation",
        }
      }
   ]
  ]
};

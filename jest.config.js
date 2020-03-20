// see https://jestjs.io/docs/en/configuration#transformignorepatterns-array-string
const packagesToTransformWithBabel = [
  'react-native', // all react-native* packages
  'mobx-react',
];

const transformIgnorePatterns = [
  `<rootDir>/node_modules/(?!(${packagesToTransformWithBabel.join('|')}))`,
];

module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetup.js'],
  transformIgnorePatterns,
};

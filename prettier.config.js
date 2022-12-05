module.exports = {
  importOrderSeparation: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^./constants$',
    '^./common$',
    '^./redux-modules$',
    '^./types$',
    '^./pages$',
    '^./components$',
    '^[./]',
  ],
  printWidth: 120,
  bracketSpacing: true,
  semi: true,
  singleQuote: true,
};

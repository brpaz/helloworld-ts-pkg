module.exports = {
  '**/*.{js,ts}': ['yarn lint:fix', 'yarn format'],
  '**/*.{json}': ['yarn format'],
};

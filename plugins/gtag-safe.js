module.exports = function gtagSafePlugin() {
  return {
    name: 'gtag-safe-plugin',
    getClientModules() {
      return [require.resolve('../src/clientModules/gtag-safe.js')];
    },
  };
};

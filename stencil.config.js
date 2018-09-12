const sass = require('@stencil/sass');

exports.config = {
  namespace: 'loading-spinner',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['loading-spinner'] }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

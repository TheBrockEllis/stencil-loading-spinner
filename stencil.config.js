const sass = require('@stencil/sass');

exports.config = {
  namespace: 'loading-spinner',
  bundles: [
    { components: ['loading-spinner'] }
  ],
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

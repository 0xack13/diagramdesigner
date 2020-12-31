module.exports = {
  entry: './df.js',
  output: {
    library: 'Drawflow',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: './df.min.js',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  }
};

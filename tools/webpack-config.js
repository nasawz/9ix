module.exports = (type) => {
  const isDev = type === 'dev';
  const isDist = type === 'dist';

  return {
    mode: type === 'dev' ? 'development' : 'production',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.html', '.scss', '.less', '.css']
    },
    entry: {},
    output: {},
    externals: {},
    optimization: {},
    plugins: [],
    module: {}
  };
};

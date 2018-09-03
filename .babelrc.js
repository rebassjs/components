module.exports = {
  presets: [
    ["@babel/env", {
      modules: process.env.NODE_ENV.includes('cjs') ||
      process.env.NODE_ENV === 'test'
      ? 'commonjs'
      : false
    }],
    "@babel/react"
  ],
  plugins: []
}

if (process.env.NODE_ENV.includes('emotion')) {
  module.exports.plugins.push([
    'transform-rename-import',
    {
      original: 'styled-components',
      replacement: 'react-emotion'
    }
  ])
}

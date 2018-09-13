const emotionImport = [
  'transform-rename-import',
  {
    original: 'styled-components',
    replacement: 'react-emotion'
  }
]

module.exports = {
  presets: [
    "@babel/react"
  ],
  env: {
    test: {
      presets: [
        ["@babel/env", { loose: true }]
      ],
      plugins: [
        '@babel/transform-runtime'
      ]
    },
    cjs: {
      presets: [
        ["@babel/env", { loose: true }]
      ],
      plugins: [
        '@babel/transform-runtime'
      ]
    },
    esm: {
      presets: [
        ["@babel/env", { loose: true, modules: false }]
      ],
      plugins: [
        ['@babel/transform-runtime', { useESModules: true }]
      ]
    },
    'emotion:cjs': {
      presets: [
        ["@babel/env", { loose: true }]
      ],
      plugins: [
        '@babel/transform-runtime',
        emotionImport
      ]
    },
    'emotion:esm': {
      presets: [
        ["@babel/env", { loose: true, modules: false }]
      ],
      plugins: [
        ['@babel/transform-runtime', { useESModules: true }],
        emotionImport
      ]
    }
  }
}


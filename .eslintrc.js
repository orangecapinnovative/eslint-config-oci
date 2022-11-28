module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['import', '@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }],
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['PropertyDefinition'],
      ignoreComments: false
    }],
    'no-underscore-dangle': ['error', {
      allow: [
        '_id',
        '_tracer',
        '_client',
        '_status',
        '_metadata',
        '_logger',
        '_context',
        '_values',
      ],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: true,
    }],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
    'max-len': ['error', 200, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      "typescript": {
        "project": ["tsconfig.json", "libs/*/tsconfig.lib.json", 'apps/*/tsconfig.app.json']
      },
      "node": {
        "project": ["tsconfig.json", "libs/*/tsconfig.lib.json", 'apps/*/tsconfig.app.json']
      }
    },
    'import/extensions': [
      '.js',
      '.ts',
    ],
  }
};

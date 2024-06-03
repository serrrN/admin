# vue项目规范化模板

日期：2024年6月1日

作者：zeng

项目打包工具: Vite

Vite 是一个基于现代浏览器原生 ES 模块导入的开发服务器，它旨在提供一个更快、更简单的开发体验。Vite 的核心思想是利用浏览器原生的 ES 模块导入，以及现代浏览器对模块动态导入的支持，来实现快速的开发和热模块替换（HMR）。

与传统的打包工具（如 webpack 和 Parcel）不同，Vite 在开发过程中不会将整个应用打包成一个或多个 bundle，而是将每个模块作为一个单独的文件提供。这样可以避免重新构建整个应用，而是只重新构建修改的部分，从而实现更快的热重载和开发构建。

pnpm的安装

```
npm i -g pnpm
```

此项目使用pnpm,故下载方式为

```
pnpm create vite
```

这个方式下载可以选择是否使用TypeScript

本项目会使用~

规范工具:pnpm+eslint+prettier+stylelint+husky+commitlint+preinstall

## 1.介绍

### 1.1 preinstall

在项目的 package.json 文件中使用 preinstall 脚本来定义在安装依赖包之前需要执行的命令,在本项目中是为了**强制使用pnpm包管理工具**

原因：团队开发项目的时候，需要统一包管理器工具,因为不同包管理器工具下载同一个依赖,可能版本不一样,

导致项目出现bug问题,因此包管理器工具需要统一管理

### 1.2 pnpm

pnpm是一个 JavaScript 项目的包管理工具，类似于 npm 和 Yarn。它的名称是 Package Node Modules 的缩写。

pnpm的主要目标是解决 npm 和 Yarn 在包安装和管理过程中可能出现的一些问题，例如包的重复安装、磁盘空间占用过大等。与 npm 和 Yarn 不同的是，pnpm使用了一种称为“符号链接（symlink）”的技术，将依赖项直接链接到项目中的共享存储位置，而不是将它们复制到每个项目中。

由于 pnpm共享依赖项的方式，它在安装和更新包时通常比 npm 和 Yarn 更快，并且可以节省磁盘空间。此外，pnpm还提供了一些其他功能，如支持自动清理缓存、并行安装依赖项等。

### 1.3 eslint

eslint是一个 JavaScript 代码静态分析工具，用于识别和报告代码中的模式，确保代码的质量和一致性。它可以帮助开发者发现并修复代码中的问题，从而提高代码的可读性、可维护性和可靠性。

### 1.4 prettier

prettier 是一个代码格式化工具，它可以自动调整代码的格式，使之符合统一的风格。与传统的代码风格指南或者 linter 不同，Prettier 不仅可以检查代码风格，还可以自动重写代码，以确保整个项目的代码风格一致。

### 1.5 stylelint

stylelint是一个用于检查 CSS 代码规范性的工具，类似于 ESLint 用于 JavaScript 的静态代码分析工具。它可以帮助开发者发现和修复 CSS 代码中的错误、不规范的写法和潜在的问题，从而提高代码的质量和一致性。

stylelint支持多种 CSS 样式风格和预处理器，包括普通的 CSS、SCSS、Less 等。它可以根据预定义的规则集（rules）对 CSS 文件进行检查，并发出警告或错误，以指导开发者编写更加规范的 CSS 代码。

### 1.6 husky

husky是一个 Git 钩子（Git hook）管理工具，它可以帮助开发团队在 Git 操作的不同阶段执行自定义的脚本。Git 钩子是 Git 在特定事件触发时执行的脚本，可以用来实现各种自动化任务，例如代码格式化、代码质量检查、测试运行等。

### 1.7 commitlint

commitlint是一个用于规范化提交信息格式的工具，它可以帮助开发团队规范提交信息的格式，从而提高代码库的可读性、可维护性和可搜索性。

## 2.安装和配置

### 2.1 preinstall

**创建文件**

在根目录创建`scritps/preinstall.js`文件，添加下面的内容

```javascript
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}
```

**代码解释**

`if (!/pnpm/.test(process.env.npm_execpath || '')) { ... }`: 这是一个条件语句，检查环境变量 `npm_execpath` 中是否包含字符串 "pnpm"。`npm_execpath` 变量通常包含 npm 或 pnpm 的路径。如果不包含 "pnpm"，则执行花括号中的代码。

1. `\u001b[33m` 和 `\u001b[39m` 是 ANSI 转义码，用于设置命令行文本的颜色。`\u001b[33m` 设置文本颜色为黄色，`\u001b[39m` 用于重置颜色到默认值。
2. `console.warn(...)`：这段代码输出一条警告信息到控制台，提示用户使用 pnpm 作为包管理器。
3. `process.exit(1)`: 这是一个 Node.js 进程退出函数，参数 1 表示退出进程并返回状态码 1，通常用于表示错误或异常情况。在这里，如果检测到项目未使用 pnpm，则退出进程并返回状态码 1。

**配置命令**

在package.json中配置命令

```json
"scripts": {
	"preinstall": "node ./scripts/preinstall.js"
}
```

它会在执行 npm install 或 yarn install 命令时运行。

**当我们使用npm或者yarn来安装包的时候，就会报错了。原理就是在install的时候会触发preinstall（npm提供的生命周期钩子）这个文件里面的代码。**

### 2.2 eslint(保证js代码质量)

安装

```
pnpm i eslint -D
```

生成配置文件

```
npx eslint --init
```

vue3环境代码校验插件

```
# 让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查
"eslint-config-prettier": "^8.6.0",
"eslint-plugin-import": "^2.27.5",
"eslint-plugin-node": "^11.1.0",
# 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低
"eslint-plugin-prettier": "^4.2.1",
# vue.js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南
"eslint-plugin-vue": "^9.9.0",
# 该解析器允许使用Eslint校验所有babel code
"@babel/eslint-parser": "^7.19.1",
```

安装指令

```
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```

.eslint.cjs

校验插件对应rules内属性

```javascript
// @see https://eslint.bootcss.com/docs/rules/

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  /* 指定如何解析语法 */
  parser: 'vue-eslint-parser',
  /** 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  /* 继承已有的规则 */
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', '@typescript-eslint'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/semi': 'off',

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
  },
}
```

**新建.eslintignore忽略文件写入以下**

```
dist
node_modules
```

**运行脚本**

package.json新增两个运行脚本

```json
"scripts": {
    "lint": "eslint src",
    "fix": "eslint src --fix",
}
```

### 2.3 prettier(保证代码美观)

**安装**

```
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

**.prettierrc.json添加规则**

```
{
  "singleQuote": true,
  "semi": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```

**.prettierignore忽略文件添加以下内容**

```
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

**通过pnpm run lint去检测语法，如果出现不规范格式,通过pnpm run fix 修改**

### 2.4 stylelint

**安装**

```
pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
```

1. **sass:** 这是 Sass 编译器的 JavaScript 实现，允许你在项目中使用 Sass（Syntactically Awesome Stylesheets）语法来编写 CSS 样式。
2. **sass-loader:** 这是 Webpack 中的一个 loader，用于加载和转换 Sass 文件，使其能够被 Webpack 打包并应用到项目中。
3. **stylelint:** 这是一个 CSS 风格检查工具，用于检查和规范 CSS 文件的语法和风格。它可以帮助团队保持一致的 CSS 代码风格，并发现并修复代码中的问题。
4. **postcss:** 这是一个 CSS 处理工具，用于处理 CSS 文件。它可以用来自动添加浏览器前缀、优化 CSS 代码、转换未来的 CSS 语法等。
5. **postcss-scss:** 这是 PostCSS 的一个插件，用于解析 SCSS（Sassy CSS）语法的 CSS 文件。
6. **postcss-html:** 这是 PostCSS 的一个插件，用于解析 HTML 文件中的样式。
7. **stylelint-config-prettier:** 这是一个 Stylelint 配置，用于禁用与 Prettier 冲突的规则。它可以确保 Stylelint 和 Prettier 在格式化 CSS 时保持一致。
8. **stylelint-config-recess-order:** 这是一个 Stylelint 配置，用于按照 Recess 的顺序检查 CSS 属性的顺序。
9. **stylelint-config-recommended-scss:** 这是一个 Stylelint 配置，提供了一组推荐的 SCSS 语法检查规则。
10. **stylelint-config-standard:** 这是一个 Stylelint 配置，提供了一组符合标准 CSS 语法的检查规则。
11. **stylelint-config-standard-vue:** 这是一个 Stylelint 配置，提供了一组适用于 Vue.js 组件的标准 CSS 语法检查规则。
12. **stylelint-scss:** 这是一个 Stylelint 插件，用于添加对 SCSS 语法的支持。
13. **stylelint-order:** 这是一个 Stylelint 插件，用于检查 CSS 属性的顺序。
14. **stylelint-config-standard-scss:** 这是一个 Stylelint 配置，提供了一组符合标准 SCSS 语法的检查规则。

**.stylelintrc.cjs配置文件写入以下代码**

```
// @see https://stylelint.bootcss.com/

module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
}
```

**.stylelintignore忽略文件写入以下内容**

```
/node_modules/*
/dist/*
/html/*
/public/*
```

**添加**

```
"scripts": {
	"lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
}
```

**最后配置统一的prettier来格式化我们的js和css，html代码**

```
 "scripts": {
    "dev": "vite --open",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src",
    "fix": "eslint src --fix",
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
    "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
  },
```

**当我们运行`pnpm run format`的时候，会把代码直接格式化**

### 2.5 husky

在上面我们已经集成好了我们代码校验工具，但是需要每次手动的去执行命令才会格式化我们的代码。如果有人没有格式化就提交了远程仓库中，那这个规范就没什么用。所以我们需要强制让开发人员按照代码规范来提交。

要做到这件事情，就需要利用husky在代码提交之前触发git hook(git在客户端的钩子)，然后执行`pnpm run format`来自动的格式化我们的代码。

安装`husky`

```
pnpm install -D husky
```

执行(前提是初始化仓库)

```
npx husky-init
```

会在根目录下生成个一个.husky目录，在这个目录下面会有一个pre-commit文件，这个文件里面的命令在我们执行commit的时候就会执行

在`.husky/pre-commit`文件添加如下命令：

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
pnpm run format
```

当我们对代码进行commit操作的时候，就会执行命令，对代码进行格式化，然后再提交。

### 2.6 commitlint

对于我们的commit信息，也是有统一规范的，不能随便写,要让每个人都按照统一的标准来执行，我们可以利用**commitlint**来实现。

安装

```
pnpm add @commitlint/config-conventional @commitlint/cli -D
```

然后添加下面的代码：

```
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
```

**在package.json的scrips中添加下面的代码**

```
{
"scripts": {
    "commitlint": "commitlint --config commitlint.config.cjs -e -V"
  },
}
```

配置结束，现在当我们填写`commit`信息的时候，前面就需要带着下面的`subject`

```
'feat',//新特性、新功能
'fix',//修改bug
'docs',//文档修改
'style',//代码格式修改, 注意不是 css 修改
'refactor',//代码重构
'perf',//优化相关，比如提升性能、体验
'test',//测试用例修改
'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert',//回滚到上一个版本
'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动
```

配置husky

```
npx husky add .husky/commit-msg
```

在生成的commit-msg文件中添加下面的命令

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
pnpm commitlint
```

当我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m 'fix: xxx' 符合类型的才可以，**需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，这个是不能省略的**

**目前的package.json的script里的代码**

```json
 "scripts": {

  "dev": "vite --open",

  "build": "vue-tsc && vite build",

  "preview": "vite preview",

  "preinstall": "node ./scripts/preinstall.js",

  "lint": "eslint src",

  "fix": "eslint src --fix",

  "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",

  "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",

  "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix",

  "prepare": "husky install",

  "commitlint": "commitlint --config commitlint.config.cjs -e -V"

 }
```

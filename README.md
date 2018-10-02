{{- /* **NOTE: This  template comment will be removed by [`tmpl`].**
# typescript-npm.tmpl
[![Build Status](https://travis-ci.com/nwtgck/typescript-npm.tmpl.svg?branch=develop)](https://travis-ci.com/nwtgck/typescript-npm.tmpl)

Template of npm project for TypeScript

## How to use this template

```bash
# Install tmpl
go get -u github.com/nwtgck/tmpl

# Create a project from this template
tmpl new https://github.com/nwtgck/typescript-npm.tmpl.git yourproject
```

Then, you will have `yourproject/` directory.

## What should you change after [`tmpl`] run?

- [lib/index.ts](lib/index.ts) - `hoge()` function defined
- [test/index.test.ts](test/index.test.ts) - `hoge()` function tested

[`tmpl`]: https://github.com/nwtgck/tmpl

<!-- The following section is a template of README.md-->
*/ -}}
# {{.project_name}}

{{.description}}

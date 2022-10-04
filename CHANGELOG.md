# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.2.0](https://github.com/bjoluc/semantic-release-config-poetry/compare/v2.1.2...v2.2.0) (2022-10-04)


### Features

* **GitHub Action:** Make the `github_token` input optional ([#2](https://github.com/bjoluc/semantic-release-config-poetry/issues/2)) ([6337108](https://github.com/bjoluc/semantic-release-config-poetry/commit/63371083c06e3341560e1448d377cbf275c5ea44))

## [2.1.2](https://github.com/bjoluc/semantic-release-config-poetry/compare/v2.1.1...v2.1.2) (2022-09-20)


### Bug Fixes

* Fix the `verifyConditions` step when the `PYPI_REPOSITORY` environment variable is not set ([702c8ec](https://github.com/bjoluc/semantic-release-config-poetry/commit/702c8ec0d8c9956476a9bef4938737686c08a560))

## [2.1.1](https://github.com/bjoluc/semantic-release-config-poetry/compare/v2.1.0...v2.1.1) (2022-09-20)


### Bug Fixes

* Fix default values of optional environment variables ([25790ad](https://github.com/bjoluc/semantic-release-config-poetry/commit/25790ad87f4d52dd134a63b4acf897aae863867e))

## [2.1.0](https://github.com/bjoluc/semantic-release-config-poetry/compare/v2.0.1...v2.1.0) (2022-09-20)


### Features

* Add support for `RELEASE_BRANCH` and `CHANGELOG_FILE` environment variables ([96dcd00](https://github.com/bjoluc/semantic-release-config-poetry/commit/96dcd00b86f7f3ac44e12329320cc951e85cb233))

## [2.0.1](https://github.com/bjoluc/semantic-release-config-poetry/compare/v2.0.0...v2.0.1) (2022-09-20)


### Bug Fixes

* Export the config as a CommonJS module ([0a296f2](https://github.com/bjoluc/semantic-release-config-poetry/commit/0a296f2a1ef6681fb7319f5b7d11f1fac7c559c2))

## [2.0.0](https://github.com/bjoluc/semantic-release-config-poetry/compare/v1.0.4...v2.0.0) (2022-09-20)


### ⚠ BREAKING CHANGES

* The GitHub Action input `repository` was renamed to `pypi_repository` to be consistent with the environment variable names.
* **Dependencies:** `semantic-release` is no longer a peer dependency and doesn't need to be installed manually. Make sure to remove any manual installation commands in your CI scripts to avoid multiple mismatching versions being installed alongside each other.
* **Dependencies:** Require Node.js LTS versions >= v14

### Features

* Make the `PYPI_REPOSITORY` environment variable optional ([2609da3](https://github.com/bjoluc/semantic-release-config-poetry/commit/2609da3e826b4e50b06776b7d13aaea77e37866b))


### Bug Fixes

* **GitHub Action:** Properly setup Node.js ([bec84a3](https://github.com/bjoluc/semantic-release-config-poetry/commit/bec84a3ba7a3a59d9531541e69ce4a4051e5a60b))


### Miscellaneous Chores

* **Dependencies:** Make `sementic-release` a direct dependency ([d47e01b](https://github.com/bjoluc/semantic-release-config-poetry/commit/d47e01b474ed8e9255c10a7e4efcc2e5323e9d3c))
* **Dependencies:** Update dependencies ([c1bb910](https://github.com/bjoluc/semantic-release-config-poetry/commit/c1bb9103be2e420d774cc7038494ce6752bb4426))

### [1.0.4](https://github.com/bjoluc/semantic-release-config-poetry/compare/v1.0.3...v1.0.4) (2021-06-17)


### Bug Fixes

* Invoke npm with the `--no-save` flag to silence warnings on old npm versions ([ab0d647](https://github.com/bjoluc/semantic-release-config-poetry/commit/ab0d64785076f90ba37340764d82d22087b85ee9))

### [1.0.3](https://github.com/bjoluc/semantic-release-config-poetry/compare/v1.0.2...v1.0.3) (2021-06-02)


### Bug Fixes

* Add missing `conventional-changelog-conventionalcommits` dependency ([f8596a1](https://github.com/bjoluc/semantic-release-config-poetry/commit/f8596a133513c184edceb9cc84ed3a856ae73d0b))

### [1.0.2](https://github.com/bjoluc/semantic-release-config-poetry/compare/v1.0.1...v1.0.2) (2021-06-02)


### Bug Fixes

* **GitHub Action:** Install npm packages locally ([ec59963](https://github.com/bjoluc/semantic-release-config-poetry/commit/ec59963bec416ae5cc209467972bc90d502bdaf5))

### [1.0.1](https://github.com/bjoluc/semantic-release-config-poetry/compare/v1.0.0...v1.0.1) (2021-06-02)


### Bug Fixes

* **GitHub Action:** Take tokens as inputs ([bc381b1](https://github.com/bjoluc/semantic-release-config-poetry/commit/bc381b1ca9d7841536085bedba792ba7152517d1))

## 1.0.0 (2021-06-02)


### Features

* Initial release ([37e6bfc](https://github.com/bjoluc/semantic-release-config-poetry/commit/37e6bfc98ecb41ebdba3cffc9023572b9039f53b))

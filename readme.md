# @bjoluc/semantic-release-config-poetry

[![npm](https://img.shields.io/npm/v/@bjoluc/semantic-release-config-poetry/latest)](https://www.npmjs.com/package/@bjoluc/semantic-release-config-npm)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bjoluc/semantic-release-config-poetry/build)](https://github.com/bjoluc/semantic-release-config-poetry/actions)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A shareable semantic-release configuration and composite GitHub Action for Python packages that use Poetry.

## How to use this

- Follow [Conventional Commits](https://www.conventionalcommits.org) (for instance, using [commitizen](https://pypi.org/project/commitizen/)).

- Create an [API token](https://pypi.org/help/#apitoken) for PyPI (or another package index of your choice, like [Test PyPI](https://test.pypi.org/)).

- If you are using GitHub Actions:

  - Add your PyPI API token as a secret named `PYPI_TOKEN`.
  - Add a release job to your workflow like this:

  ```yml
  jobs:
    test: ...
    release:
      name: Release
      runs-on: ubuntu-latest
      needs: test
      if: github.repository_owner == 'your-github-name' && github.event_name == 'push' && github.ref == 'refs/heads/main'
      steps:
        - uses: actions/checkout@v2
        - uses: actions/setup-python@v2
          with:
            python-version: 3.8
        - name: Install poetry
          run: pip install poetry==1.1.6
        - uses: bjoluc/semantic-release-config-poetry@v1
          with:
            pypi_token: ${{ secrets.PYPI_TOKEN }}
            github_token: ${{ secrets.GITHUB_TOKEN }}
  ```

- If you are not using GitHub Actions, configure a release job in your CI like this:
  - Install Python, Poetry, and a Node.js LTS version
  - Run `npm install --no-save @bjoluc/semantic-release-config-poetry`
  - Run `npx semantic-release --extends @bjoluc/semantic-release-config-poetry`

## Configuration

The shareable semantic-release configuration exposed by this package requires the following environment variables.
When using the GitHub action, each environment variable can be set via its corresponding lower-case input variable (e.g., `pypi_token` for `PYPI_TOKEN`).

| Environment variable | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `PYPI_TOKEN`         | An API token for the PyPI repository specified by `PYPI_REPOSITORY`            |
| `GITHUB_TOKEN`       | A GitHub API token (to publish GitHub releases and comment on resolved issues) |

Furthermore, the following optional environment variables can be set:

| Environment variable | Description                                                                                                                                          | Default value                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `PYPI_REPOSITORY`    | The repository to upload your Python package to (e.g., `https://upload.pypi.org/legacy/` for PyPI, or `https://test.pypi.org/legacy/` for Test PyPI) | `https://upload.pypi.org/legacy/` |

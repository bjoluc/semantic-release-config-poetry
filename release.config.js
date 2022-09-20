const PYPI_REPOSITORY = process.env.PYPI_REPOSITORY ?? "https://upload.pypi.org/legacy/";

const config = {
	branches: ["main"],
	plugins: [
		[
			"@semantic-release/commit-analyzer",
			{
				preset: "conventionalcommits",
			},
		],
		[
			"@semantic-release/release-notes-generator",
			{
				preset: "conventionalcommits",
			},
		],
		[
			"@semantic-release/changelog",
			{
				changelogTitle:
					"# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.",
			},
		],
		[
			"@semantic-release/exec",
			{
				verifyConditionsCmd:
					'if [ 403 != $(curl -X POST -F ":action=file_upload" -u __token__:$PYPI_TOKEN -s -o /dev/null -w "%{http_code}" $PYPI_REPOSITORY) ]; then (exit 0); else (echo "Authentication error. Please check the PYPI_TOKEN environment variable." && exit 1); fi',
				prepareCmd: "poetry version ${nextRelease.version}",
				publishCmd: `poetry config repositories.repo ${PYPI_REPOSITORY} && poetry publish --build --repository repo --username __token__ --password $PYPI_TOKEN --no-interaction -vvv`,
			},
		],
		[
			"@google/semantic-release-replace-plugin",
			{
				replacements: [
					{
						files: ["*/__init__.py"],
						ignore: ["test/*", "tests/*"],
						from: "__version__ = [\"'].*[\"']",
						to: '__version__ = "${nextRelease.version}"',
					},
				],
			},
		],
		[
			"@semantic-release/github",
			{
				assets: [
					{ path: "dist/*.tar.gz", label: "sdist" },
					{ path: "dist/*.whl", label: "wheel" },
				],
				successComment:
					":tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on PyPI and GitHub.",
				failComment: false,
			},
		],
		[
			"@semantic-release/git",
			{
				assets: ["pyproject.toml", "*/__init__.py", "CHANGELOG.md"],
			},
		],
	],
};

module.exports = config;

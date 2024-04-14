# parse-changelog-action
[![Build Image](https://github.com/infrastructure-blocks/parse-changelog-action/actions/workflows/build-image.yml/badge.svg)](https://github.com/infrastructure-blocks/parse-changelog-action/actions/workflows/build-image.yml)
[![Docker Tag](https://github.com/infrastructure-blocks/parse-changelog-action/actions/workflows/docker-tag.yml/badge.svg)](https://github.com/infrastructure-blocks/parse-changelog-action/actions/workflows/docker-tag.yml)
[![Git Tag Semver From Label](https://github.com/infrastructure-blocks/parse-changelog-action/actions/workflows/git-tag-semver-from-label.yml/badge.svg)](https://github.com/infrastructure-blocks/parse-changelog-action/actions/workflows/git-tag-semver-from-label.yml)
[![Update From Template](https://github.com/infrastructure-blocks/parse-changelog-action/actions/workflows/update-from-template.yml/badge.svg)](https://github.com/infrastructure-blocks/parse-changelog-action/actions/workflows/update-from-template.yml)
[![codecov](https://codecov.io/gh/infrastructure-blocks/parse-changelog-action/graph/badge.svg?token=S1OANU9UMZ)](https://codecov.io/gh/infrastructure-blocks/parse-changelog-action)

A template repository for GitHub Actions hosted as docker images on registries.

## Inputs

|     Name      | Required | Description      |
|:-------------:|:--------:|------------------|
| example-input |   true   | A useless input. |

## Outputs

|      Name      | Description                    |
|:--------------:|--------------------------------|
| example-output | An equivalently useless output |

## Permissions

|     Scope     | Level | Reason   |
|:-------------:|:-----:|----------|
| pull-requests | read  | Because. |

## Usage

```yaml
- uses: docker://public.ecr.aws/infrastructure-blocks/parse-changelog-action:v1
  with:
    example-input: hello
```

## Releasing

The CI fully automates the release process. The only manual intervention required is to assign a semantic
versioning label to the pull request before merging (this is a required check). Upon merging, the
release process kicks off. It manages a set of semantic versioning git tags,
as described [here](https://github.com/infrastructure-blocks/git-tag-semver-action).

Upon tagging the default branch, jobs to tag docker images with the same tags will kick off.

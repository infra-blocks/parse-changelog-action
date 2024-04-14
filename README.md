# docker-typescript-action-template
[![Build Image](https://github.com/infrastructure-blocks/docker-typescript-action-template/actions/workflows/build-image.yml/badge.svg)](https://github.com/infrastructure-blocks/docker-typescript-action-template/actions/workflows/build-image.yml)
[![Docker Tag](https://github.com/infrastructure-blocks/docker-typescript-action-template/actions/workflows/docker-tag.yml/badge.svg)](https://github.com/infrastructure-blocks/docker-typescript-action-template/actions/workflows/docker-tag.yml)
[![Git Tag Semver From Label](https://github.com/infrastructure-blocks/docker-typescript-action-template/actions/workflows/git-tag-semver-from-label.yml/badge.svg)](https://github.com/infrastructure-blocks/docker-typescript-action-template/actions/workflows/git-tag-semver-from-label.yml)
[![Trigger Update From Template](https://github.com/infrastructure-blocks/docker-typescript-action-template/actions/workflows/trigger-update-from-template.yml/badge.svg)](https://github.com/infrastructure-blocks/docker-typescript-action-template/actions/workflows/trigger-update-from-template.yml)
[![codecov](https://codecov.io/gh/infrastructure-blocks/docker-typescript-action-template/graph/badge.svg?token=S1OANU9UMZ)](https://codecov.io/gh/infrastructure-blocks/docker-typescript-action-template)

A template repository for GitHub Actions hosted as docker images on registries.

## Instantiation checklist

- Remove the [trigger update from template workflow](.github/workflows/trigger-update-from-template.yml)
- Rename the docker image/container in [docker compose file](./docker/docker-compose.yml)
- Edit the package.json to reflect the action's name and links
- Run `nvm install`
- Run `npm install`
- Replace the self-test section of the [build-image workflow](.github/workflows/build-image.yml).
- Set up code coverage
- Update the status badges:
    - Remove the `Trigger Update From Template` status badge.
    - Add the `Update From Template` status badge.
    - Rename the rest of the links to point to the right repository.
- Replace the summary and the action usage section in this document.

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
- uses: docker://public.ecr.aws/infrastructure-blocks/docker-typescript-action-template:v1
  with:
    example-input: hello
```

## Releasing

The CI fully automates the release process. The only manual intervention required is to assign a semantic
versioning label to the pull request before merging (this is a required check). Upon merging, the
release process kicks off. It manages a set of semantic versioning git tags,
as described [here](https://github.com/infrastructure-blocks/git-tag-semver-action).

Upon tagging the default branch, jobs to tag docker images with the same tags will kick off.

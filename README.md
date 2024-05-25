# parse-changelog-action
[![Build](https://github.com/infra-blocks/parse-changelog-action/actions/workflows/build.yml/badge.svg)](https://github.com/infra-blocks/parse-changelog-action/actions/workflows/build.yml)
[![Release](https://github.com/infra-blocks/parse-changelog-action/actions/workflows/release.yml/badge.svg)](https://github.com/infra-blocks/parse-changelog-action/actions/workflows/release.yml)
[![Update From Template](https://github.com/infra-blocks/parse-changelog-action/actions/workflows/update-from-template.yml/badge.svg)](https://github.com/infra-blocks/parse-changelog-action/actions/workflows/update-from-template.yml)
[![codecov](https://codecov.io/gh/infra-blocks/parse-changelog-action/graph/badge.svg?token=RAGCCY76MI)](https://codecov.io/gh/infra-blocks/parse-changelog-action)

## Inputs

|      Name      | Required | Description                                                                     |
|:--------------:|:--------:|---------------------------------------------------------------------------------|
| changelog-file |  false   | The path to the changelog file. Defaults to CHANGELOG.md in the root directory. |

## Outputs

|      Name      | Description                                                                                                           |
|:--------------:|-----------------------------------------------------------------------------------------------------------------------|
| changelog-file | The effective changelog-file used. If a value was provided, then it is the value. Otherwise, it is the default value. |
|      json      | The stringified JSON output parsed out of the changelog. See [format](#json-format).                                  |

### JSON format

The output has the following format:
```json
{
  "title": "Changelog",
  "description": "Test changelog.",
  "releases": [
    {
      "version": "1.0.0",
      "date": "2024-04-14",
      "description": "",
      "changes": {
        "added": [
          {
            "title": "Stuff.",
            "description": "",
            "issues": []
          }
        ],
        "changed": [],
        "deprecated": [],
        "removed": [],
        "fixed": [],
        "security": []
      },
      "yanked": false
    }
  ]
}
```

## Permissions

N/A

## Usage

```yaml
- uses: docker://public.ecr.aws/infra-blocks/parse-changelog-action:v1
  with:
    changelog-file: DIFFERENT-CHANGELOG-FILE.md
```

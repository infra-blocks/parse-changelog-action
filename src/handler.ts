import core from "@actions/core";
import { JsonObject } from "@infra-blocks/json";
import { Change, Changelog, parser } from "keep-a-changelog";
import { readFile } from "node:fs/promises";
import { HandlerOutputs, HandlerParams } from "./types.js";

export async function handler(params: HandlerParams): Promise<HandlerOutputs> {
  const { changelogFile } = params;
  core.info(`parsing changelog ${changelogFile}`);

  const content = await readFile(changelogFile, { encoding: "utf-8" });
  const parsed = parser(content);

  return { json: serialize(parsed) };
}

function serialize(changelog: Changelog): JsonObject {
  return {
    title: changelog.title,
    description: changelog.description,
    releases: changelog.releases.map((release) => ({
      version: release.version == null ? null : release.version,
      date:
        release.date == null
          ? null
          : // Outputs YYYY-MM-DD
            release.date.toLocaleDateString("en-CA", { timeZone: "UTC" }),
      description: release.description,
      changes: serializeVersionChanges(release.changes),
      yanked: release.yanked,
    })),
  };
}

function serializeVersionChanges(
  versionChanges: Map<string, Change[]>,
): JsonObject {
  const result: JsonObject = {};
  for (const [type, changes] of versionChanges) {
    result[type] = changes.map(serializeChange);
  }
  return result;
}

function serializeChange(change: Change) {
  return {
    title: change.title,
    description: change.description,
    issues: change.issues,
  };
}

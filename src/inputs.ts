import { z } from "zod";
import { ParseChangelogActionTemplateError } from "./error.js";
import { HandlerParams, Inputs } from "./types.js";

export function parseInputs(inputs: Inputs): HandlerParams {
  try {
    return z
      .object({
        "changelog-file": z.string().default("CHANGELOG.md"),
      })
      .transform((parsed) => ({
        changelogFile: parsed["changelog-file"],
      }))
      .parse(inputs);
  } catch (err) {
    throw new ParseChangelogActionTemplateError(
      { cause: err as Error },
      `error parsing inputs ${JSON.stringify(inputs)}`,
    );
  }
}

import core from "@actions/core";
import { HandlerOutputs, HandlerParams } from "./types.js";

export function handler(params: HandlerParams): Promise<HandlerOutputs> {
  const { exampleInput } = params;
  core.info("Running handler!");
  core.info(`received your input: ${exampleInput}`);
  return Promise.resolve({
    "example-output": "BYE!",
  });
}

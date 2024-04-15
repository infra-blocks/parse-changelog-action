import { JsonObject } from "@infra-blocks/json";

export interface Inputs {
  "changelog-file"?: string;
}

export interface HandlerParams {
  changelogFile: string;
}

export interface HandlerOutputs {
  json: JsonObject;
}

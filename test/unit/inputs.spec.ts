import { expect } from "@infra-blocks/test";
import { parseInputs } from "../../src/inputs.js";

describe("inputs", function () {
  describe(parseInputs.name, function () {
    describe("changelog-file", function () {
      it("should work with a valid value", function () {
        expect(parseInputs({ "changelog-file": "toto.md" })).to.deep.equal({
          changelogFile: "toto.md",
        });
      });
      it("should default to CHANGELOG.md", function () {
        expect(parseInputs({})).to.deep.equal({
          changelogFile: "CHANGELOG.md",
        });
      });
    });
  });
});

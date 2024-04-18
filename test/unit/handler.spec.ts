import { handler } from "../../src/handler.js";
import { expect } from "@infra-blocks/test";
import mockFs from "mock-fs";

describe("handler", function () {
  describe(handler.name, function () {
    afterEach("restore fs", function () {
      mockFs.restore();
    });

    it("should work with minimal changelog", async function () {
      const changelogFile = "CHANGELOG.md";
      mockFs({
        [changelogFile]: "# Changelog",
      });

      expect(await handler({ changelogFile })).to.deep.equal({
        json: {
          title: "Changelog",
          description: "",
          releases: [],
        },
        "changelog-file": changelogFile,
      });
    });

    it("should work with a simple changelog with one version", async function () {
      const changelog = `
# Changelog

Test changelog.

## [1.0.0] - 2024-04-14

### Added

- Stuff.
`;
      const changelogFile = "BIG-CHANGELOG.md";
      mockFs({
        [changelogFile]: changelog,
      });

      expect(await handler({ changelogFile })).to.deep.equal({
        json: {
          title: "Changelog",
          description: "Test changelog.",
          releases: [
            {
              version: "1.0.0",
              date: "2024-04-14",
              description: "",
              changes: {
                added: [
                  {
                    title: "Stuff.",
                    description: "",
                    issues: [],
                  },
                ],
                changed: [],
                deprecated: [],
                removed: [],
                fixed: [],
                security: [],
              },
              yanked: false,
            },
          ],
        },
        "changelog-file": changelogFile,
      });
    });
  });
});

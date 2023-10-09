import { ColorHelper } from "./color";

describe("ColorHelper", () => {
  describe("getRandomHsl", () => {
    it("should return a string", () => {
      const result = ColorHelper.getRandomHsl();
      expect(typeof result).toBe("string");
    });

    it("should return proper hsl format", () => {
      const regex = /^hsl\([0-9]+,\s*[0-9]+%,\s+[0-9]+%\)$/;
      const result = ColorHelper.getRandomHsl();
      expect(regex.test(result)).toBe(true);
    });
  });
});

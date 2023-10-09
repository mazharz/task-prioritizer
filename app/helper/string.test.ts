import { StringHelper } from "./string";

describe("StringHelper", () => {
  describe("getUniqueId", () => {
    it("should return initials as ID", () => {
      const existing: string[] = [];
      const title = "John Doe";
      const result = StringHelper.getUniqueId(existing, title);
      expect(result).toBe("jd");
    });

    it("should return initials with additional + if one exists already", () => {
      const existing: string[] = ["jd"];
      const title = "John Doe";
      const result = StringHelper.getUniqueId(existing, title);
      expect(result).toBe("jd+");
    });

    it("should return initials with additional +s if they exists already", () => {
      const existing: string[] = ["jd", "jd+", "jd++", "jd+++"];
      const title = "John Doe";
      const result = StringHelper.getUniqueId(existing, title);
      expect(result).toBe("jd++++");
    });
  });
});

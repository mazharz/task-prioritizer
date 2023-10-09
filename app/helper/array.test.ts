import { ArrayHelper } from "./array";

describe("ArrayHelper", () => {
  describe("countOccurances", () => {
    it("should return 0 if empty array is given", () => {
      const array: any[] = [];
      const filterer = () => true;
      const result = ArrayHelper.countOccurances(array, filterer);
      expect(result).toBe(0);
    });

    it("should return 1 if one element matches", () => {
      const array: number[] = [1, 2, 3];
      const filterer = (n: number) => n === 2;
      const result = ArrayHelper.countOccurances(array, filterer);
      expect(result).toBe(1);
    });

    it("should return 3 if three elements match", () => {
      type T = { a: boolean };
      const array: T[] = [{ a: true }, { a: false }, { a: true }, { a: true }];
      const filterer = (n: T) => !!n.a;
      const result = ArrayHelper.countOccurances(array, filterer);
      expect(result).toBe(3);
    });
  });
});

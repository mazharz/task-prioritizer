import { ArrayHelper } from "./array";

class StringHelper {
  static getUniqueId(existingIds: string[], title: string): string {
    let id = this.getInitials(title);
    const occurances = ArrayHelper.countOccurances(existingIds, (c) =>
      c.startsWith(id)
    );
    if (occurances) {
      const tail = "+".repeat(occurances);
      id += tail;
    }
    return id;
  }

  private static getInitials(input: string): string {
    const words = input.split(/\s+/);
    const firstCharacters = words.map((w) => {
      const first = w[0];
      if (!/[A-Za-z0-9]/.test(first)) {
        return "";
      }
      return first.toLowerCase();
    });
    return firstCharacters.join("");
  }
}

export { StringHelper };

class ColorHelper {
  static getRandomHsl() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30 + 40);
    const lightness = Math.floor(Math.random() * 30 + 60);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}

export { ColorHelper };

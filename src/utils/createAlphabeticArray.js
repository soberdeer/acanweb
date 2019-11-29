export default function createAlphabeticArray() {
  return Array
    .apply(null, {length: 26})
    .map((_, i) => String.fromCharCode(1072 + i));
}

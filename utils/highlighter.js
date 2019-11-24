export default function highlighter(string, lightArray) {
  return {
    start: string.slice(0, lightArray[0]),
    highlight: string.slice(lightArray[0], lightArray[1] + 1),
    end: string.slice(lightArray[1] + 1, string.length),
  };
}

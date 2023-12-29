import text from "../../public/text.txt?raw";
import TextCompress from "../../src/TextCompress.ts";

const textCompress = new TextCompress();
const compressed = textCompress.compress(text);
const decompressed = textCompress.decompress(compressed);

console.log("===compressed", compressed);
console.log("===decompressed", decompressed);
console.log("===isEqual",
  {
    compressed,
    decompressed,
    equal: text === decompressed
  }
);

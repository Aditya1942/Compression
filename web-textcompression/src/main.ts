import text from "../../public/dev.txt?raw";
import LZWCompress from "../../src/LZWCompress.ts";

const compressor = new LZWCompress();
const compressed = compressor.compress(text);
const decompressed = compressor.decompress(compressed);

// console.log("===compressed", compressed);
// console.log("===decompressed", decompressed);
// console.log("===isEqual",
//   {
//     compressed,
//     decompressed,
//     equal: text === decompressed
//   }
// );

import LZWCompress from "./src/LZWCompress.ts";

const textFile = Bun.file("./public/test.txt"); // relative to cwd

const text = await textFile.text();
const compressor = new LZWCompress();
const compressed = compressor.compress(text);
const decompressed = compressor.decompress(compressed);
await Bun.write("./public/compress.txt", compressed);
await Bun.write("./public/decompress.txt", decompressed);


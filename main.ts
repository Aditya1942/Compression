import TextCompress from "./src/TextCompress.ts";

const textFile = Bun.file("./public/text.txt"); // relative to cwd

const text = await textFile.text();
const textCompress = new TextCompress();
const compressed = textCompress.compress(text);
const decompressed = textCompress.decompress(compressed);
await Bun.write("./public/compress.txt", compressed);
await Bun.write("./public/decompress.txt", decompressed);


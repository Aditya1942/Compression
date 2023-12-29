import TextCompress from "./src/TextCompress.ts";

const textFile = Bun.file("./public/text.txt"); // relative to cwd

const text = await textFile.text();
const textCompress = new TextCompress();
textCompress.compress(text);

import TextCompress from "./TextCompress.ts";

const textFile = Bun.file("./source/text.txt"); // relative to cwd

const text = await textFile.text();
const textCompress = new TextCompress(text);
textCompress.compress();

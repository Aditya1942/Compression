import TextCompress from "../../src/TextCompress.ts";

const text2 = `Reliability at massive scale is one of the biggest challenges we
face at Amazon.com, one of the largest e-commerce operations in
the world;

Reliability at massive scale is one of the biggest challenges we
face at Amazon.com, one of the largest e-commerce operations in
the world;

Reliability at massive scale is one of the biggest challenges we
face at Amazon.com, one of the largest e-commerce operations in
the world;`;

const text = `Reliability at massive

Reliability at massive

Reliability at massive`;

const textCompress = new TextCompress(text);
textCompress.compress();
//
// const search = text.search("Reliability at massive \\n\\nRe");
// console.log("===search", search);

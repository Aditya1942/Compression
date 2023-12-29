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

const textCompress = new TextCompress();
const compressed = textCompress.compress(text2);
const decompressed = textCompress.decompress(compressed);

console.log("===compressed", compressed);
console.log("===decompressed", decompressed);
console.log("===isEqual",
  {
    text2,
    decompressed,
    equal: text2 === decompressed
  }
);

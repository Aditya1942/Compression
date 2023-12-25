import TextCompress from "../../TextCompress.ts";

const text = `Reliability at massive scale is one of the biggest challenges we
face at Amazon.com, one of the largest e-commerce operations in
the world;

Reliability at massive scale is one of the biggest challenges we
face at Amazon.com, one of the largest e-commerce operations in
the world;

Reliability at massive scale is one of the biggest challenges we
face at Amazon.com, one of the largest e-commerce operations in
the world;`;

const textCompress = new TextCompress(text);
textCompress.compress();

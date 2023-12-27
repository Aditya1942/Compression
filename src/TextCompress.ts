export default class TextCompress
{
  text: string;
  words: string[] = [];
  bufferLength = 5;

  constructor(textFile: string)
  {
    this.text = textFile;
  }

  toWords()
  {
    const text = this.text;
    this.words = text.split(" ").map(value => value.split("\n")).flat();
  }

  search(word: string)
  {

  }

  compress()
  {
    this.toWords();
    const words = this.words;
  }
}

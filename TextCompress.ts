export default class TextCompress
{
  text: string;

  constructor(textFile: string)
  {
    this.text = textFile;
  }

  compress()
  {
    const text = this.text;
    const len = text.length;
    let start = 0;
    let end = 0;
    let bufferStr = "";

    const varMap = new Map<string, string>();
    const words = new Array<{word: string, newLine?: boolean}>();

    for(let i = 0; i < len; i++)
    {
      const char = text?.at(i);
      bufferStr += char;
      if(char === " " || char === "\n")
      {
        const newLine = char === "\n";

        words.push({
          word: text.substring(start, end),
          ...newLine && {
            newLine: newLine
          }
        });
        start = end + 1;
      }

      end++;

    }
    console.log("===varMap", varMap, words);
  }
}

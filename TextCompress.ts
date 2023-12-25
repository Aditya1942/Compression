type IWord = {word: string, newLine?: boolean};
export default class TextCompress
{
  text: string;
  words: IWord[] = [];
  bufferLength = 5;

  constructor(textFile: string)
  {
    this.text = textFile;
  }

  insertWord(word: string, newLine: boolean)
  {
    this.words.push({
      word: word,
      ...newLine && {
        newLine: newLine
      }
    });
  }

  search(str: string, start: number, end?: number)
  {
    return this.text.substring(start, end).search(str);
  }

  getBufferStr(index: number)
  {
    const bufferArr: string[] = [];

    for(let i = 0; i < this.bufferLength; i++)
    {
      const start = index - i;
      const end = start + this.bufferLength;
      const subStr = this.text.substring(start, end);
      bufferArr.push(subStr);

      console.log("===i", i, index);
    }
    console.log("%c===break", "color:red", bufferArr);
  }

  compress()
  {
    const text = this.text;
    const len = text.length;
    let bufferStr = "";
    let start = 0;

    const varMap = new Map<string, string>();
    const bufferArr: string[] = [];

    for(let i = 0; i < len; i++)
    {
      const char = text?.at(i);
      bufferStr += char;
      this.getBufferStr(i);
    }
    console.log("===bufferStr", bufferArr);
    console.log("===varMap", varMap, bufferArr, this.words);
  }
}



type IWord = {text: string, newLine?: boolean};
export default class TextCompress
{
  text: string;
  words: IWord[] = [];

  constructor(textFile: string)
  {
    this.text = textFile;
    this.toWords();
  }

  toWords()
  {
    const text = this.text;
    const words = [] as IWord[];
    let word = "";
    const len = text.length;
    for(let i = 0; i < len; i++)
    {
      const char = text[i];
      if(char === "\n" || char === " ")
      {
        const isNewLine = char === "\n";
        words.push({
          text: word,
          ...isNewLine && {
            newLine: true
          }
        });

        word = "";
      }
      else
      {
        word += char;
      }
    }
    if(word !== "")
    {
      words.push({
        text: word
      });
    }
    this.words = words;
  }

  search(word: string)
  {

  }

  compress()
  {
    const words = this.words;
    const text = this.text;
    const len = words.length;
    let newText = "";
    let i = 0;
    let buffer = "";
    let charCount = 0;
    while(i < len)
    {
      const word = words[i].text;
      charCount += this.charCount(words, i);
      buffer = buffer === "" ? word : buffer;
      const search = this.text.search(buffer);
      console.log("===%c search", "color:red;background-color:grey",
        {
          words,
          word,
          search,
          buffer,
          text
        }
      );

      i++;
    }
    console.log("===newText", newText, charCount, text.length);
  }

  charCount(words: IWord[], index: number)
  {
    const word = words[index];
    const isLastWord = index === words.length - 1;
    return word.text.length + (isLastWord ? 0 : 1);
  }

  mergeTwoWords(word1: string, word2: string)
  {
    let str = "";
    if(word1 !== "")
    {
      str = word1 + " ";
    }
    if(word2 !== "")
    {
      str = str + word2;
    }
    else
    {
      str = str + "\n";
    }
    return str;
  }
}

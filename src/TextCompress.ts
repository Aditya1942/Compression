type IWord = {text: string, newLine?: boolean};
export default class TextCompress
{
  words: IWord[] = [];

  constructor()
  {
  }

  compress(_text: string)
  {
    function match(str: string, startIndex: number = 0)
    {
      return text.substring(startIndex).match(str);
    }

    this.toWords(_text);
    const words = this.words;
    let text = _text.slice();
    const len = words.length;
    let i = 0;
    let buffer = "";
    let charCount = 0;
    while(i < len)
    {
      const word = words[i].text;
      buffer = buffer === "" ? word : buffer;
      const search = buffer ? match(buffer, charCount) : undefined;
      if(search)
      {
        charCount = this.charCount(words, i);
        const mergedWord = this.mergeTwoWords(buffer, words.at(i + 1)?.text);
        const searchMerged = match(mergedWord, charCount);
        if(searchMerged)
        {
          buffer = mergedWord;
        }
        else
        {
          const previousText = text.substring(0, charCount);
          const endText = text.substring(charCount);
          const searchInStart = previousText.search(buffer);
          if(searchInStart >= 0)
          {
            const start = searchInStart;
            const end = searchInStart >= 0 ? searchInStart + (buffer.length) : -1;
            const varName = `$\{${start}:${end}}`;
            text = previousText + endText.replaceAll(buffer, varName);
          }
          buffer = "";
        }
      }
      else
      {
      }
      i++;
    }
    return text;
  }

  decompress(_text: string)
  {
    let newText = "";
    const length = _text.length;
    let start = -1;
    for(let i = 0; i < length; i++)
    {
      const char = _text.at(i);
      if(char === "$" && _text.at(i + 1) === "{")
      {
        start = i;
      }
      else if(start >= 0 && char === "}")
      {
        const [sIndex, eIndex] = _text.substring(start + 2, i).split(":");
        newText += _text.substring(+sIndex, +eIndex);
        start = -1;
      }
      else if(start === -1)
      {
        newText += char;
      }
    }
    return newText;
  }

  private toWords(text: string)
  {
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

  private charCount(words: IWord[], index: number)
  {
    let count = 0;
    for(let i = 0; i <= index; i++)
    {
      const word = words[i];
      const isLastWord = i === words.length - 1;
      count += word.text.length + (isLastWord ? 0 : 1);
    }
    return count;
  }

  private mergeTwoWords(word1: string, word2?: string)
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
    return str;
  }
}

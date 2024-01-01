import BaseCompress from "./base/BaseCompress.ts";

export default class LZWCompress implements BaseCompress
{
  private charToCodeMap: Map<string, number> = new Map<string, number>();
  private codeToCharMap: Map<number, string> = new Map<number, string>();

  constructor()
  {
    this.refreshMap();
  }

  compress(text: string): string
  {
    this.refreshMap();
    const compressed: number[] = [];
    const len = text.length;
    let word = "";
    for(let i = 0; i < len; i++)
    {
      const char = word + text[i];
      if(this.charToCodeMap.has(char))
      {
        word = char;
      }
      else
      {
        compressed.push(this.charToCodeMap.get(word) as number);
        this.charToCodeMap.set(char, this.charToCodeMap.size);
        word = text[i];
      }
    }
    if(word)
    {
      compressed.push(this.charToCodeMap.get(word) as number);
    }
    return compressed.toString();
  }

  decompress(text: string): string
  {
    this.refreshMap();
    const array = text.split(",");
    const len = array.length;
    let word = this.codeToCharMap.get(parseInt(array[0])) as string;
    let newText = word;
    for(let i = 1; i < len; i++)
    {
      const code = parseInt(array[i]);
      let newWord = "";
      if(this.codeToCharMap.get(code))
      {
        newWord = this.codeToCharMap.get(code) as string;
      }
      else if(code === this.codeToCharMap.size)
      {
        newWord = word + word[0];
      }
      newText += newWord;
      this.codeToCharMap.set(this.codeToCharMap.size, word + newWord[0]);
      word = newWord;
    }

    return newText;
  }

  private refreshMap(): void
  {
    this.charToCodeMap = new Map<string, number>();
    this.codeToCharMap = new Map<number, string>();
    for(let i = 0; i < 256; i++)
    {
      this.charToCodeMap.set(String.fromCharCode(i), i);
      this.codeToCharMap.set(i, String.fromCharCode(i));
    }
  }
}

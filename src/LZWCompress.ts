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
    return JSON.stringify(compressed);
  }

  decompress(text: string): string
  {
    this.refreshMap();
    const newText = "";
    const array = JSON.parse(text);
    array.forEach((code: number) =>
    {
      console.log(code, this.codeToCharMap.get(code));
    });
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

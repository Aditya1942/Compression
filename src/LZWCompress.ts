import BaseCompress from "./base/BaseCompress.ts";

export default class LZWCompress implements BaseCompress
{
  charCodeMap: Map<string, number> = new Map<string, number>();

  constructor()
  {
    for(let i = 0; i < 256; i++)
    {
      this.charCodeMap.set(String.fromCharCode(i), i);
    }
  }

  compress(text: string): string
  {
    const compressed: number[] = [];
    const len = text.length;
    let word = "";
    let previousWord = "";
    let i = 0;
    while(i < len)
    {
      const isLast = i === (len - 1);
      previousWord = word;
      word = !word ? text[i] : word + text[i];
      if(!this.charCodeMap.has(word))
      {
        const code = this.charCodeMap.get(previousWord);
        if(code)
        {
          compressed.push(code);
        }
        this.charCodeMap.set(word, this.charCodeMap.size);
        word = "";
      }
      else
      {
        i++;
      }
    }
    console.log("===compress", compressed, this.charCodeMap);
    return JSON.stringify(compressed);
  }

  decompress(text: string): string
  {
    const compressed: number[] = JSON.parse(text);
    if(Array.isArray(compressed) && compressed.length === 0)
    {
      return "";
    }
    // console.log("===decompress", compressed);
    return text;
  }
}

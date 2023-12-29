export default abstract class BaseCompress
{
  abstract compress(text: string): string;

  abstract decompress(text: string): string;
}

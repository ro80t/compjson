export function splitBuf(buf: Buffer, num: number): Buffer[] {
  const chunks: Buffer[] = [];

  for (let i = 0; i < buf.length; i += num) {
    chunks.push(buf.subarray(i, i + (num - 1)));
  }

  return chunks;
}

export function split8(buf: Buffer): Buffer[] {
  return splitBuf(buf, 8);
}

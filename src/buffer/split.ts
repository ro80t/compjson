export function splitBuf(buf: Buffer, num: number): Buffer[] {
  const chunks: Buffer[] = [];

  for (let i = 0; i < buf.length; i += num) {
    chunks.push(buf.subarray(i, i + num));
  }

  return chunks;
}

export function split8(buf: Buffer): Buffer[] {
  return splitBuf(buf, 8);
}

export function split9(buf: Buffer): Buffer[] {
  return splitBuf(buf, 9);
}

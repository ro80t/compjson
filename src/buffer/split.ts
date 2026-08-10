export function split8(buf: Buffer): Buffer[] {
  const chunks: Buffer[] = [];

  for (let i = 0; i < buf.length; i += 8) {
    chunks.push(buf.subarray(i, i + 7));
  }

  return chunks;
}

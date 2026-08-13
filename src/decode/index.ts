import { zstdDecompressSync } from "node:zlib";

import * as toon from "@toon-format/toon";

export function decode(content: Buffer) {
  const str = zstdDecompressSync(content).toString("utf-8");

  return toon.decode(str);
}

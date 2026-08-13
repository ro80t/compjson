import { zstdCompressSync } from "node:zlib";

import * as toon from "@toon-format/toon";

export function encode(content: string) {
  const exchangedToon = toon.encode(content);

  return zstdCompressSync(exchangedToon);
}

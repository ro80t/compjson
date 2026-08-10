import { describe, expect, it } from "vitest";
import { split8, split9, splitBuf } from "./split.js";

describe("splitBuf", () => {
  it("splits an exact multiple of the chunk size into equal chunks", () => {
    const buf = Buffer.from([0, 1, 2, 3, 4, 5, 6, 7]);
    expect(splitBuf(buf, 4)).toEqual([
      Buffer.from([0, 1, 2, 3]),
      Buffer.from([4, 5, 6, 7]),
    ]);
  });

  it("keeps a shorter final chunk when the length isn't a multiple", () => {
    const buf = Buffer.from([0, 1, 2, 3, 4, 5, 6]);
    expect(splitBuf(buf, 4)).toEqual([
      Buffer.from([0, 1, 2, 3]),
      Buffer.from([4, 5, 6]),
    ]);
  });

  it("reproduces the original buffer when chunks are concatenated", () => {
    const buf = Buffer.from("the quick brown fox jumps over the lazy dog");
    const chunks = splitBuf(buf, 5);
    expect(Buffer.concat(chunks)).toEqual(buf);
  });

  it("returns an empty array for an empty buffer", () => {
    expect(splitBuf(Buffer.alloc(0), 8)).toEqual([]);
  });

  it("returns a single chunk when the buffer is smaller than the chunk size", () => {
    const buf = Buffer.from([1, 2, 3]);
    expect(splitBuf(buf, 8)).toEqual([Buffer.from([1, 2, 3])]);
  });

  it("handles high byte values (>= 0x80) without sign issues", () => {
    const buf = Buffer.from([0xff, 0xf1, 0x80, 0x7f]);
    expect(splitBuf(buf, 2)).toEqual([
      Buffer.from([0xff, 0xf1]),
      Buffer.from([0x80, 0x7f]),
    ]);
  });
});

describe("split8", () => {
  it("delegates to splitBuf with a chunk size of 8", () => {
    const buf = Buffer.from(Array.from({ length: 20 }, (_, i) => i));
    expect(split8(buf)).toEqual(splitBuf(buf, 8));
  });
});

describe("split9", () => {
  it("delegates to splitBuf with a chunk size of 9", () => {
    const buf = Buffer.from(Array.from({ length: 20 }, (_, i) => i));
    expect(split9(buf)).toEqual(splitBuf(buf, 9));
  });
});

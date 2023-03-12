function compress(chars: string[]): number {
  for (let l = 0, r = 1; l < chars.length && r < chars.length; ) {
    const lChar = chars[l];

    let lCharCount = 1;
    for (
      let rChar = chars[r];
      rChar === lChar;
      rChar = chars[r], lCharCount++
    ) {
      chars.splice(r, 1);
    }

    if (lCharCount === 1) {
      l++;
      r = l + 1;

      continue;
    }

    const compressedCount = [...String(lCharCount)];
    chars.splice(l + 1, 0, ...compressedCount);

    l += compressedCount.length + 1;
    r = l + 1;
  }

  return chars.length;
}

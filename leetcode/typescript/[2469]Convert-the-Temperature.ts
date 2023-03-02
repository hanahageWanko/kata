const convertTemperature = (celsius: number): number[] => {
  // 摂氏⇒華氏
  const f = c2f(celsius);
  // 華氏⇒ケルビン
  const k = f2k(f);
  return [k, f];
};

// 入力値（摂氏）を華氏に変換
const c2f = (c: number) => {
  //変換式
  const f = (9 / 5) * c + 32;
  return f;
};

// 入力値（華氏）をケルビンに変換
const f2k = (f: number) => {
  // 変換式
  const t = ((f + 459.67) * 5) / 9;
  return t;
};

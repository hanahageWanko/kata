
type CombineFunction = (n: number, k: number) => number[][];
type BacktraceFunction = (start: number, output: number) => void;

const combine:CombineFunction = (n, k) => {
  const result: number[][] = [];

  // 再帰関数を定義
  const backtrack = (start: number, output: number[]) => {
    if (output.length === k) {
      // 配列内の要素数がk個になったら、返却用の配列に追加
      result.push([...output]);
      return;
    }

    // スタートの値からループ
    for (let i = start; i <= n; i++) {
      output.push(i); // i を配列へ挿入
      backtrack(i + 1, output); // iの次の値を配列に挿入し、outputでkの値を挿入する
      console.log(output)
      output.pop(); // 配列の最後の値を削除
    }
  };

  backtrack(1, []);

  return result;
}

// 例
// const n: number = 4;
// const k: number = 2;
// const result: number[][] = combine(n, k);
// console.log(result); // Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #初級 #union #built-in

  組み込みの型ユーティリティ`Pick<T, K>`を使用せず、`T`から`K`のプロパティを抽出する型を実装します。
*/

/**
 * K extends keyof Tで、Todo側のキーのユニオン型を返却する　= "title | description | completed"
 * また、extendsによって、Kが必ずTのキーであることが保証される
 * これによって、Tに存在しないキーをMyPick側の第二引数に設定することができなくなる
 * [P in K]で、Kの各要素をPに代入する
 * T[P]で、Todo型のPの方であることを表す
 */
type MyPick<T , K extends keyof T> = {
    [P in K] : T[P]
}

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
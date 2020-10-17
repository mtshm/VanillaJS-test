import "./styles.css";

// &&や||は「又は」や「かつ」という意味ではない

// ||について
//左の値に応じて、返す値を変えられる。
// 三項演算子みたいな感じ
// 左がtruthy:左の値を返す
// 左がfalthy:右側の値を返す
// 表示するデータが無いときのメッセージとかで使う
const num = null;
const fee = num || "左側がfalseで表示されます";
console.log(fee); // nullはfalthyなので、右側を返す

// &&について
//左側がtruthyなら右側を返す
// 表示するデータがある場合に共通して表示したい情報を右側に書くイメージ
const num2 = 100;
const fee2 = num2 && "左側がtrueで表示されます";
console.log(fee2);

// if文のカッコ内で&&や||は「又は」や「かつ」という意味となる仕組み

// ||が又はになるのは左右の両側ともに、
// falthyでない限りは値を返すため

// &&がかつになるのは左右の両側ともに、
// truthyでない限り、値を返さないため

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

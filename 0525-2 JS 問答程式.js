// \n換行
// for迴圈來跑每一個題目
// let input = prompt()用來存放使用者的輸入
// 數字跟字串做相加，會把數字轉成字串

let questions = [
  {
    prompt: "NCT有幾位成員?\n(a) 24\n(b) 23\n(c) 22",
    ans: "c",
  },
  {
    prompt: "WAYV有幾位韓國成員?\n(a) 0\n(b) 1\n(c) 2",
    ans: "a",
  },
  {
    prompt: "誰是NCT大哥?\n(a) TY\n(b) TI\n(c) JN",
    ans: "b",
  },
];

let score = 0;
for (let i = 0; i < questions.length; i++) {
  let input = prompt(questions[i].prompt);
  if (input == questions[i].ans) {
    score++;
    alert("答對了！");
  } else {
    alert("答錯了！");
  }
}
alert("總共答對 " + score + " 題！");

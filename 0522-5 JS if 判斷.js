// 1.
let hungry = true;
if (hungry) {
  document.write("就去吃飯");
}
document.write("</br>");

// 2.
let rainy = true;
if (rainy) {
  document.write("開車上班");
} else {
  document.write("走路上班");
}
document.write("</br>");

// 3.
/*
let score = prompt("請輸入你的分數");
if (parseFloat(score) == 100) {
  document.write("獎金$1000");
} else if (parseFloat(score) >= 80) {
  document.write("獎金$500");
} else if (parseFloat(score) >= 60) {
  document.write("獎金$100");
} else {
  document.write("罰金$300");
}
*/

// 4. && 兩個條件都需為true，if才會成立
/*
let score = 100;
let sunny = true;
if (score == 100 && sunny) {
  document.write("獲得$1000");
} else {
  document.write("扣$100");
}
*/

// 5. || 兩個條件其一為true，if就會成立
/*
let score = 90;
let sunny = true;
if (score == 100 || sunny) {
  document.write("獲得$1000");
} else {
  document.write("扣$100");
}
*/

// 6. ! 會讓true變false；false變true
let score = 90;
let sunny = false;
if (score == 100 || !sunny) {
  document.write("獲得$1000");
} else {
  document.write("扣$100");
}
document.write("</br>");

// 7. 回傳最大的數
/*
function max_num(n1, n2, n3) {
  return Math.max(n1, n2, n3);
}
document.write(max_num(5, 7, 9));
*/

function max_num(n1, n2, n3) {
  if (n1 >= n2 && n1 >= n3) {
    return n1 + "為最大值";
  } else if (n2 >= n1 && n2 >= n3) {
    return n2 + "為最大值";
  } else {
    return n3 + "為最大值";
  }
}
document.write(max_num(5, 15, 25));

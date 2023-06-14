// 函式function: 為預先寫好的程式碼，當呼叫時才會被執行

function hello() {
  document.write("你好嗎？");
}
hello(); //呼叫函式

function world(name, age) {
  document.write("你好，我叫" + name + "，今年" + age + "歲。");
}
world("Tina", "26");

/*
function add(n1, n2) {
  document.write(n1 + n2);
}
let num1 = parseFloat(prompt("第一個數"));
let num2 = parseFloat(prompt("第二個數"));
add(num1, num2);
*/

// 回傳值 return，會覆蓋掉原先的呼叫；且return後都不會再做運算
// 回傳值作用: 不單單印出函式結果，而是還可拿來做其他運算
function divide(n3, n4) {
  // document.write(n3 / n4);
  return n3 / n4;
}
// divide(100, 5);
document.write(divide(100, 5));
document.write("</br>");

// eg.
function hihi(n5, n6) {
  document.write(n5 + n6);
  document.write("</br>");
  return 10;
  document.write("你好");
}
value = hihi(3, 2);
document.write(value);

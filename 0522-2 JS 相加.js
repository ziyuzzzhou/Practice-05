/*
let my_name=prompt("請輸入名字");
let my_age=prompt("請輸入年紀");
document.write("你好啊"+my_name);
document.write("你今年"+my_age+"歲");
*/

let num1 = prompt("請輸入第一個數字");
let num2 = prompt("請輸入第二個數字");
// 會變成字串與字串相加
// document.write(num1 + num2);

// parseInt()把字串轉換成整數，如果輸入小數，相加就會失敗
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// document.write(num1 + num2);

// parseFloat()把字串轉成有小數點的數
num1 = parseFloat(num1);
num2 = parseFloat(num2);
document.write(num1 + num2);

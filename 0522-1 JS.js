document.write("hello!!!");
document.write("<h1>world!!!</h1>");

// 基本資料型態與變數

// 字串
("小黑");

// 數字
87;
87.5555;

// 布林值
true;
false;

// 變數命名規則
// 只能是英文大小寫 or 數字 or $ or _ 的組合
// 開頭不能是數字
let my_name = "小黑";
let my_age = 60;
let my_height = 170;
let is_male = true;

document.write("我叫" + my_name);
document.write("</br>");

my_name = "小白";
document.write("我叫" + my_name);
document.write("</br>");

document.write('hello" world');
document.write("</br>");
document.write(my_name + my_age + " 你好");

let phrase = "hello world hahaha";
document.write("</br>");
document.write(phrase.length);
document.write("</br>");
// 轉換成大寫
document.write(phrase.toUpperCase());
document.write("</br>");
// 轉換成小寫
document.write(phrase.toLowerCase());
document.write("</br>");
// 回傳第幾位的值
document.write(phrase.charAt(1));
// 回傳在第幾位
document.write(phrase.indexOf("h"));
document.write(phrase.indexOf("o"));
document.write("</br>");
// 從第二位開始到第十位之前，含二不含十
document.write(phrase.substring(2, 10));
document.write("</br>");

/*
document.write(my_name + "今年" + my_age + "歲");
document.write("</br>");
document.write(my_name + "身高" + my_height + "cm");
document.write("</br>");
document.write(my_name + "討厭自己" + my_age + "歲");
*/

document.write(6 * 30);
document.write(30 / 5 + 5 * 3);
document.write((30 / (5 + 5)) * 3);
document.write("</br>");

let number = 1.9;
document.write((5 + 1) * number);
document.write("</br>");

document.write(8 % 5); //取餘數
document.write("</br>");

document.write(Math.abs(number)); //取絕對值
document.write("</br>");

document.write(Math.max(2, 3, 4, 55, 6, number)); //回傳最大的數
document.write(Math.min(2, 3, 4, 55, 6, number)); //回傳最小的數
document.write("</br>");

document.write(Math.round(number)); //四捨五入
document.write("</br>");

document.write(Math.pow(2, 3)); //2的3次方
document.write("</br>");

document.write(Math.sqrt(81)); //開根號
document.write("</br>");

document.write(Math.random());
document.write("</br>");
document.write(Math.random() * 10);
document.write("</br>");
document.write(Math.round(Math.random() * 10)); //1-10的隨機數

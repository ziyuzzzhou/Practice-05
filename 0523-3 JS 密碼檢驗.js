// 無限制輸入次數
/*
let pw = 123456;
let input = prompt("請輸入密碼");

// != 不相等
while (pw != input) {
  input = prompt("密碼錯誤，請再次輸入密碼");
}

alert("登入成功");
*/

// 只能輸入3次
let pw = 123456;
let input;
let entry_count = 0;
let entry_limit = 3;
let out_of_limit = false;

while (pw != input && !out_of_limit) {
  entry_count++;
  if (entry_count <= entry_limit) {
    input = prompt("請輸入密碼");
  } else {
    out_of_limit = true;
  }
}

if (out_of_limit) {
  alert("超出輸入次數");
} else {
  alert("登入成功");
}

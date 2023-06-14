// while迴圈: 重複執行一段程式碼直到條件判斷為false
// while (true) {}
let i = 6;
while (i <= 3) {
  document.write(i);
  document.write("</br>");
  // i = i + 1;
  // i += 1;
  i++;
}

document.write("<hr>");

// do while: 不會先判斷條件有無成立
let n = 6;
do {
  document.write(n);
  document.write("</br>");
  n++;
} while (n <= 3);

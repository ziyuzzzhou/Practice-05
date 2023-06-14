// 二維陣列
let number = [[0, 1, 2], [3, 4, 5], [6, 7], [8]];

document.write(number[1][2]); // 印出5
document.write(number[3][0]); // 印出8
document.write("<hr>");

// 巢狀迴圈
for (let i = 0; i < 4; i++) {
  for (let n = 0; n < 3; n++) {
    document.write("i:" + i + " ; n:" + n);
    document.write("</br>");
  }
}

// 取得二維陣列裡所有值，correct yes!!
for (let a = 0; a < number.length; a++) {
  for (let b = 0; b < number[a].length; b++) {
    document.write(number[a][b]);
  }
  document.write("</br>");
}

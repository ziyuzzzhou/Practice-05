// while
let i = 0;
while (i < 5) {
  document.write(i);
  document.write("</br>");
  i++;
}
document.write("<hr>");

// for
for (let n = 0; n < 5; n++) {
  document.write(n);
  document.write("</br>");
}
document.write("<hr>");

// 印出陣列裡所有的值
let friends = ["小綠", "小黃", "小粉"];
for (let q = 0; q < friends.length; q++) {
  document.write(friends[q]);
  document.write("</br>");
}

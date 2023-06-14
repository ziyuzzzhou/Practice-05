// window為瀏覽器物件、全域物件，所有東西都在window之下，因此可省略不寫window

document.write("hahaha1");
window.document.write("hahaha2");

// prompt("hehehe1");
// window.prompt("hehehe2");

// 會印出 undefined
// let aaa = 123;
// window.document.write(window.aaa);

var aaa = 123;
window.document.write(window.aaa);

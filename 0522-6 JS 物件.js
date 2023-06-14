// object(物件)可以存放很多key(鍵)與value(值)的配對
// value也可以為函式，此函式不需另外取名

let person = {
  name: "Tina",
  age: 26,
  is_female: true,
  print_name: function () {
    // this.name等於person.name
    document.write(this.name);
  },
};

// console.log(person);
// document.write(person);

document.write(person.age);
person.print_name();

// JS裡面的東西都可以把它看成是物件
// .length, .indexOf(""),...都是內建函式
let phrase = "hello";
document.write(phrase.length);
document.write(phrase.indexOf("o"));

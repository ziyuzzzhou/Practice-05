// class，物件模板，可以更方便快速的創建物件
// 模板名稱第一字母"通常"會用大寫
// constructor(){} 初始函式，把傳入的值賦予給實體物件
// let xxx = new Phone(傳入物件屬性, ..., ...);

class Phone {
  constructor(number, year, is_waterproof) {
    this.number = number;
    this.year = year;
    this.is_waterproof = is_waterproof;
  }
  phone_age() {
    return 2023 - this.year;
  }
}

// 創建物件
let phone1 = new Phone("123", 2018, false);
let phone2 = new Phone("456", 2019, true);
let phone3 = new Phone("789", 2020, true);

document.write(phone1.number);
document.write("</br>");
document.write(phone2.year);
document.write("</br>");
document.write(phone3.is_waterproof);
document.write("</br>");
document.write(phone3.phone_age());

// 以下較沒效率
/*
let phone1 = {
  number: "123",
  year: 2018,
  is_waterproof: false,
  phone_age: function () {
    return 2023 - this.year;
  },
};

let phone2 = {
  number: "456",
  year: 2019,
  is_waterproof: true,
  phone_age: function () {
    return 2023 - this.year;
  },
};

let phone3 = {
  number: "789",
  year: 2020,
  is_waterproof: true,
  phone_age: function () {
    return 2023 - this.year;
  },
};
*/

// 真實世界物件example

let movie = {
  title: "一杯熱奶茶的等待",
  director: "詹馥華",
  duration: 114,
  actors: [
    {
      name: "連晨翔",
      age: 31,
      is_female: false,
    },
    {
      name: "吳子霏",
      age: 29,
      is_female: true,
    },
  ],
};

document.write(movie.title);
document.write("</br>");
document.write(movie.duration);
document.write("</br>");
document.write(movie.actors[1].name);
document.write("</br>");
document.write(movie.actors[1].age);
document.write("</br>");
document.write(movie.actors[1].is_female);

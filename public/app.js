var app = function() {
addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
addCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
addCat("Cat1", "Food 1", "https://i.pinimg.com/originals/f2/d1/76/f2d17682de7dafc59cd11695478de2bd.jpg");

};

var addCat = function(name, food, image){

  var ul = createUl();
  var li1 = createLi1(name);
  var li2 = createli2(food);
  var li3 = createli3();
  var img = createImg(image);

  appendElements(ul, li1, li2, li3, img);
}

var createUl = function(){
  var ul = document.createElement("ul");
  ul.classList.add("cat");
  return ul;
}

var createLi1 = function(name){
  var li1 = document.createElement("li");
  li1.textContent = "Name: " + name;
  return li1;
}

var createli2 = function(food){
  var li2 = document.createElement("li");
  li2.textContent = "Food: "+ food;
  return li2;
}

var createli3 = function(){
  var li3 = document.createElement("li");
  return li3;
}

var createImg = function(image){
  var img = document.createElement("img");
  img.src = image;
  img.width = 500;
  return img;
}

var appendElements = function(ul, li1, li2, li3, img){
  var cats = document.querySelector("#cats");
  cats.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  li3.appendChild(img);
}


window.onload = app;

// var appendElements = function(name, food, image){
//   // blockQuote.appendChild(cite);
//   // quoteArticle.appendChild(blockQuote);
//
//   // quotes.appendChild(quoteArticle);
// }

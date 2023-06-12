//change the boxsize
function changeBoxSize(box) {
  box.style.width = "200px";
  box.style.height = "200px";
}
function resetSize(box) {
  box.style.width = "300px";
  box.style.height = "300px";
  box.style.backgroundColor = "pink";

}
//change the boxcolor
function changeBoxColor(box) {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = randomColor;
}
function resetColor(box) {
  box.style.backgroundColor = "#ffc0cb";
}

//change the image and contect change
function imgBoxChange(box) {
  const img = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"];
  let randomIndex = Math.floor(Math.random() * img.length);
  let randomImage = "./img/" + img[randomIndex];
  box.style.backgroundImage = "url('" + randomImage + "')";

  const changeContents = document.getElementById("img-content");
  changeContents.innerHTML = "";
}
function resetImg(box) {
  box.style.backgroundImage = "none";
  let content = ["A sea of golden blooms.",
    "A sunflower field is like a sky with a thousand suns.",
    "A sunflower field is my favorite kind of field.",
    "A sunflower is the happiest flower.",
    "All you need is love and sunflowers.",
    "Always stop and smell the sunflowers.",
    "Be like a flower and turn your face to the sun.",
  ];
  const contentchange = document.getElementById("img-content");
  let randomcontentIndex = Math.floor(Math.random() * content.length);
  let contentrandom = content[randomcontentIndex];
  contentchange.innerHTML = contentrandom;
}
// auto play button
let intervalId;
function buttonClick() {
  intervalId = setInterval(() => {
    const box1 = document.querySelector('.box1');
    changeBoxSize(box1);

    const box2 = document.querySelector('.box2');
    changeBoxColor(box2);

    const box3 = document.querySelector('.box3');
    imgBoxChange(box3);
  }, 1000);
}
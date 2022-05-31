let twitterSpan = document.querySelector('#twitter');
let twitterImage = twitterSpan.firstElementChild;

let instaSpan = document.querySelector('#instagram');
let instaImage = instaSpan.firstElementChild;

let facebookSpan = document.querySelector('#facebook');
let facebookImage = facebookSpan.firstElementChild;

twitterImage.onmouseover = function() {twitterImage.src = "img/TwitterLogoColour.png"}
twitterImage.onmouseout = function() {twitterImage.src = "img/TwitterLogoOutline.png"}

instaImage.onmouseover = function() {instaImage.src = "img/InstagramLogoColour.png"}
instaImage.onmouseout =  function() {instaImage.src = "img/InstagramLogoOutline.png"}

facebookImage.onmouseover = function() {facebookImage.src = "img/FacebookLogoColour.png"}
facebookImage.onmouseout = function() {facebookImage.src = "img/FacebookLogoOutline.png"}

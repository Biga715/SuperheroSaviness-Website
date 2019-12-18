var featuredHeroes=['https://www.kawerna.pl/wp-content/uploads/2019/12/Moon-Knight-top.jpg', 'http://www.cheatsheet.com/wp-content/uploads/2017/03/nightwing-in-bludhaven-1.jpg', 'https://cdn.onebauer.media/one/empire-images/features/560ec25e50e6c513721c3cc6/deadpool-comic.jpg?quality=50&width=1000&ratio=1-1&resizeStyle=aspectfit&format=jpg' ]
var fHNames=["Moon Knight", "Knight Wing", "Deadpool"]
var i = 0;
var imageLength = fHNames.length-1;


function slideEffect(){
  i = i + 1;
  console.log(i);
  if(i > imageLength){
    i=0;
  }
document.getElementById("fHero").innerHTML = "Featured Hero: " + fHNames[i];
document.getElementById("featurePic").src = featuredHeroes[i];
}

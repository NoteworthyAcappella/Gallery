function purgeAndLoadImages(){
  document.getElementById("19-20").innerHTML = "<h1>2019-2020 Season</h1>";
  document.getElementById("18-19").innerHTML = "<h1>2018-2019 Season</h1>";
  document.getElementById("17-18").innerHTML = "<h1>2017-2018 Season</h1>";
  var a = window.innerWidth;
  var b = window.innerHeight;
  if (a == window.innerWidth && b == window.innerHeight){
  }
  else{
    return 0;
  }
  loadImages();
}

function loadImages(){
  var imageList = new XMLHttpRequest();
  imageList.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
      var imgNum = 0;
      var obj = JSON.parse(this.responseText);
      for(var i=0; i < obj.nineteentwenty.length; i++) {
        document.getElementById("19-20").innerHTML += "<img src=\"2019-20/" + obj.nineteentwenty[i] + ".jpg\" style=\"margin:30px;\" id=\"20_" + imgNum.toString() +"\" class=\"Image\" onclick=\"biggify(20, " + imgNum.toString() + ")\" />";
        getImageSize("2019-20/" + obj.nineteentwenty[i] + ".jpg", imgNum, "20_");
        imgNum ++;
      }
      imgNum = 0;
      for(var i=0; i < obj.eighteennineteen.length; i++) {
        document.getElementById("18-19").innerHTML += "<img src=\"2018-19/" + obj.eighteennineteen[i] + ".jpg\" style=\"margin:30px;\" id=\"19_" + imgNum.toString() +"\" class=\"Image\" onclick=\"biggify(19, " + imgNum.toString() + ")\" />";
        getImageSize("2018-19/" + obj.eighteennineteen[i] + ".jpg", imgNum, "19_");
        imgNum++;
      }
      imgNum = 0;
      for(var i=0; i < obj.seventeeneighteen.length; i++) {
        document.getElementById("17-18").innerHTML += "<img src=\"2017-18/" + obj.seventeeneighteen[i] + ".jpg\" style=\"margin:30px;\" id=\"18_" + imgNum.toString() +"\" class=\"Image\" onclick=\"biggify(18, " + imgNum.toString() + ")\" />";
        getImageSize("2017-18/" + obj.seventeeneighteen[i] + ".jpg", imgNum, "18_");
        imgNum++;
      }
    }
  };
  imageList.open("GET", "https://www.noteworthylhs.ml/Gallery/images.json", true);
  imageList.send();
}

function getImageSize(src, arg, yr){
  var img = new Image();
  img.decoding = 'sync';
  img.onload = function(){
    var a = yr + arg.toString();
    var hTotal;
    if (window.innerHeight > window.innerWidth){
      hTotal = (window.innerHeight / 3) - 120;
    }
    else{
      hTotal = (window.innerHeight / 2) - 90;
    }
    document.getElementById(a).style.height = hTotal.toString() + "px";
  }
  img.src = src;
}

function biggify(group, id){
  var a = document.getElementById(group + "_" + id).src;
  document.getElementById("all").innerHTML = "<div id=\"Current\" class=\"Current\"><button class=\"x\" onclick=\"destroyCurrent()\">x</button><img src=\""+a+"\" id=\"BigView\" class=\"BigView\" style=\"text-align:center;\"/ ></div>" + document.getElementById("all").innerHTML;
  if ((document.getElementById(group + "_" +id).offsetHeight/document.getElementById(group + "_" +id).offsetWidth) > (window.innerHeight/window.innerWidth)){
    document.getElementById("BigView").style.height = (0.7 * window.innerHeight).toString() + "px";
  }
  else{
    document.getElementById("BigView").style.width = (0.7 * window.innerWidth).toString() + "px";
  }
}

function destroyCurrent(){
  document.getElementById("Current").outerHTML = "";
}

function trialLoadImages(){
  var imageList = new XMLHttpRequest();
  imageList.onReadyStateChange = function(){
    if(this.readyState == 4 && this.status == 200){
      var obj = JSON.parse(this.responseText);
      for(var i=0; i<obj.ninteentwenty.length; i++){
        document.getElementById("19-20").innerHTML += '<img src="./2019-20/' + obj.ninteentwenty[i] + '.jpg" style="margin:30px;" />';
      }
      for(var i=0; i<obj.eighteennineteen.length; i++){
        document.getElementById("18-19").innerHTML += '<img src="./2018-19/' + obj.eighteennineteen[i] + '.jpg" style="margin:30px;" />';
      }
      for(var i=0; i<obj.seventeeneighteen.length; i++){
        document.getElementById("17-18").innerHTML += '<img src="./20c17-18/' + obj.seventeeneighteen[i] + '.jpg" style="margin:30px;" />';
      }
    }
    else{
      document.getElementById("all").innerHTML += "<h1>Failed to load images. Please try again later.</h1>";
    }
  }
  imageList.open("GET","images.json",true);
  imageList.send()
}

function loadImages(){
  var imageList = new XMLHttpRequest();
  imageList.onReadyStateChange = function(){
    if(this.readyState == 4 && this.status == 200){
      var obj = JSON.parse(this.responseText);
    }
  }
}

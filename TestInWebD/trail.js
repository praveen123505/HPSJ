
   function fetchissues(){
   
    var str1 = document.getElementById("allissues").value;
    var str2 = document.getElementById("actionrate").value;
    var str3 = document.getElementById("Assigned").value;
   // console.log('The Issue is:'+str1);
   // console.log('Effect:'+str2);
   // console.log('Pesrson taking Care:'+str3);
//    document.write(str1);
//   document.write(str2);
//    document.write(str3);
var score = 1;
localStorage.score = 1;
var score = parseInt(localStorage.score);
var myissues;
 if(Number){
    myissues={
      str1:str1,
      str2:str2,
      str3:str3
    }
   };
   document.addEventListener('content',fetchissues());{
      document.getElementById().addEventListener('click',adding)
   }
   
   
   // localStorage.score = JSON.stringify(myissues);
   // var storedmyissues = JSON.parse(localStorage.myissues);
   // console.log(JSON.stringify(storedmyissues))
   
 
}


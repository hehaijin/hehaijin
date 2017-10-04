import axios from 'axios'



var submit=document.getElementById('submit');
submit.addEventListener("click",getpath);

  
function getpath()
  {
   document.getElementById("result").innerHTML="Getting result from server ...";

  
  console.log("button clicked");
  var start=document.getElementById("start").value.trim().toLowerCase();
  var end=document.getElementById("end").value.trim().toLowerCase();
  if(start=="" || end=="") {
    document.getElementById("result").innerHTML="Input can not be empty!";
    return;
  }
  
  if(start==end)
  {
    document.getElementById("result").innerHTML="No kidding, they are the same!";
    return;
  }
 var url='http://'+window.location.host+'/findPath/'+start+'/'+end; 
 console.log(url);
  
axios.get(url).then(

function(response){
  
  var data=response.data;
  
  
  document.getElementById("result").innerHTML=data;
  
  
}



);
  
  
  }

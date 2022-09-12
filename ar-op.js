   
function add(){

  var num = document.getElementById('number').value
  var lim = document.getElementById('limit').value
  var result = ""

       for(i=1;i<=lim;i++){
         //var mul = Number(num)*i
         result =  result + '\n' + num + "+" + i + "=" + (+num+i) + '\n' ; 
         document.getElementById('screen').value=result   
         console.log(result)     
       }
}


function sub(){

  var num = document.getElementById('number').value
  var lim = document.getElementById('limit').value
  var result = ""

       for(i=1;i<=lim;i++){
         //var mul = Number(num)*i
         result =  result + '\n' + num + "-" + i + "=" + (num-i) + '\n' ; 
         document.getElementById('screen').value=result   
         console.log(result)     
       }
}

function mul(){

  var num = document.getElementById('number').value
  var lim = document.getElementById('limit').value
  var result = ""

       for(i=1;i<=lim;i++){
         //var mul = Number(num)*i
         result =  result + '\n' + num + "x" + i + "=" + (num)*i + '\n' ; 
         document.getElementById('screen').value=result   
         console.log(result)     
       }
}

function div(){

  var num = document.getElementById('number').value
  var lim = document.getElementById('limit').value
  var result = ""

       for(i=1;i<=lim;i++){
         //var mul = Number(num)*i
         result =  result + '\n' + num + "/" + i + "=" + (num)/i + '\n' ; 
         document.getElementById('screen').value=result   
         console.log(result)     
       }
}


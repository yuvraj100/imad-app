var button = document.getElementById('counter');

var submit = document.getElementById('submit_btn');
submit.onclick = function ()
{
  var requestName = new XMLHttpRequest();
  //creating request
  
  //request response code
  requestName.onreadystatechange = function (){
    
    if(requestName.readyState == XMLHttpRequest.DONE)
    {
        if(requestName.status == 200){
            
            var names = requestName.responseText;
            names = JSON.parse(names);
            var list = '';
            for(var i =0;i<names.length ;i++)
            {
                list = '<li>'+names[i]+'</li>';
            }
            var ul = document.getElementById('nameList');
            ul.innerHTML = list;
        }
    }
  };
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  requestName.open('GET', 'http://yuvrajcusat.imad.hasura-app.io/submit-name?name=' + name,true);
  requestName.send(null);
};



button.onclick = function () {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if(request.readyState == XMLHttpRequest.DONE ){
            if(request.status == 200){
                var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
    };
    
   request.open('GET', 'http://yuvrajcusat.imad.hasura-app.io/counter',true);
   request.send(null);
};
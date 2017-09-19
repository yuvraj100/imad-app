var button = document.getElementById('counter');
var counters = 0;
button.onClick = function() {
    
  counters = counters + 1;
  var span = document.getElementById('count');
  span.innerHTML = counters.toString();
};
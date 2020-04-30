/* eslint-disable */

$(document).ready(function(){
function Circlle(el) {
  
  $(el).circleProgress({ fill: { color: '#5a5550' } })
    .on('circle-animation-progress', function (event, progress, stepValue) {
      $(this).find('p').text(String(stepValue.toFixed(2)).substr(2)+'%');
      
    });
};

Circlle('.round');
})

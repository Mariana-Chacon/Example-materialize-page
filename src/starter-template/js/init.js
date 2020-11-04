


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems,{
    height:500,
    interval:2000,
    indicators:false,
  } );
});
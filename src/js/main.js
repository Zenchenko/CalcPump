function rangevalue(range.value) { 
var markRagne     = false,
    rangeUp       = function () {markRagne = false; },
    rangeMove     = function () {if(markRagne) outRangeValue(); },
    rangeDown     = function () {markRagne = true; },
    outRangeValue = function () {
      document.getElementById("rangeValue").innerHTML = range.value;
    };

range.addEventListener("mousedown", rangeDown);
range.addEventListener("mousemove", rangeMove);
} 

rangevalue();